import {
  Controller,
  Delete,
  Get,
  Params,
  Patch,
  Post,
  Put,
  Request,
  Response,
} from "@decorators/express";
import { CreateUserDto, LoggedUserDto, LoginUserDto, PutUserDto } from "../dto";
import { HttpException } from "../exceptions";
import { AuthMiddleware } from "../middlewares";
import { AuthService, UserService } from "../services";

@Controller("/user") 
class UserController {
  private userService: UserService;
  private authService: AuthService
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  
  @Get("/",[AuthMiddleware])
  async getList(@Response() res) {
    const temp = await this.userService.list();
    if (temp) {
      res.send(temp).status(200);
    } else {
      throw new HttpException(500, "Internal error");
    }
  }
  @Post("/create")
  async postCreate(@Response() res, @Request() req) {
    const newPerson = req.body as CreateUserDto;
    console.log("Controller",newPerson)
    if(
      Object.keys(newPerson).length == 0 ||
      (newPerson.email == "" || newPerson.email == null || newPerson.email == undefined) ||
      (newPerson.fullname == "" || newPerson.fullname == null || newPerson.fullname == undefined) ||
      (newPerson.password == "" || newPerson.password == null || newPerson.password == undefined) || 
      (newPerson.username == "" || newPerson.username == null || newPerson.username == undefined) 
    ) throw new HttpException(409,"Provided data not match the model")
    const temp = await this.userService.create(newPerson);
    if (temp) {
      res.send(temp).status(201);
    } else {
      throw new HttpException(500, "Internal error");
    }
  }
  @Put('/:id',[AuthMiddleware]) //>>
  async putById(@Response() res,@Request() req, @Params('id') id:string)
  {
    const changePerson = req.body as PutUserDto;
    if (
      Object.keys(changePerson).length == 0 ||
      changePerson.email == "" ||
      changePerson.password == "" ||
      changePerson.fullname == "" ||
      changePerson.password == "" 
    )
      throw new HttpException(422, "Unprocessable entity");
    const loginDto: LoginUserDto = {username:changePerson.username,password:changePerson.password};
    const foundUser = await this.userService.get(loginDto);
    if (!foundUser) throw new HttpException(404, "Not found");
    const temp = await this.userService.putById(id,changePerson);
    const token = this.authService.createToken(temp);
    if (!token)
      throw new HttpException(500, "Internal error, unable to create token");
    if (temp) {
      res.send({token,user:foundUser} as LoggedUserDto).status(200);
    } else {
      throw new HttpException(500, "Internal error");
    }
  }
  @Get("/:id",[AuthMiddleware])
  async getById(@Response() res, @Params("id") id: string) {
    const temp = await this.userService.readById(id);
    if (temp) {
      res.send(temp).status(200);
    } else {
      throw new HttpException(500, "Internal error");
    }
  }
  @Delete('/:id',[AuthMiddleware])
  async deleteById(@Response() res, @Params('id') id:string )
  {
      const temp = await this.userService.deleteById(id);
      if (temp) {
        res.send(temp).status(200);
      } else {
        throw new HttpException(500, "Internal error");
      }
  }
  @Patch('/:id',[AuthMiddleware])
  async patchById(@Response() res,@Request() req, @Params('id') id:string)
  {
    const changePerson = req.body as PutUserDto;
    const temp = await this.userService.patchById(id,changePerson);
    if (temp) {
      res.send(temp).status(200);
    } else {
      throw new HttpException(500, "Internal error");
    }
  }
}
export default UserController;
