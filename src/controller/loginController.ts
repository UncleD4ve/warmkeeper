import { Controller, Get, Post, Request, Response } from "@decorators/express";
import { CreateFurnaceDto, LoginUserDto } from "../dto";
import { HttpException } from "../exceptions";
import { FurnaceService, UserService } from "../services";
import {AuthService} from "../services";

@Controller("/login")
class LoginController {
  private userService: UserService;
  private authService: AuthService;
  private furnaceService: FurnaceService;
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.furnaceService = new FurnaceService();
  }

  @Post("/")
  async login(@Response() res, @Request() req) {
    const loginDto = req.body as LoginUserDto;
    if (
      Object.keys(loginDto).length == 0 ||
      loginDto.password == "" ||
      loginDto.username == ""
    )
      throw new HttpException(422, "Unprocessable entity");
    const foundUser = await this.userService.get(loginDto);
    if (!foundUser) throw new HttpException(404, "Not found");
    const token = this.authService.createToken(foundUser);
    if (!token)
      throw new HttpException(500, "Internal error, unable to create token");
    res.send(token).status(200);
  }
  @Post("/esp")
  async loginESP(@Response() res, @Request() req) {
    const loginDto = {username:req.body.username,password:req.body.password} as LoginUserDto;
    if (
      Object.keys(loginDto).length == 0 ||
      loginDto.password == "" ||
      loginDto.username == ""
    )
      throw new HttpException(422, "Unprocessable entity");
    const foundUser = await this.userService.get(loginDto);
    if (!foundUser) throw new HttpException(404, "Not found");
    const furnaceDto = {userId:foundUser.id,name:req.body.name,typ:req.body.typ} as CreateFurnaceDto;
    if(
      Object.keys(furnaceDto).length == 1 ||
      furnaceDto.name == "" ||
      furnaceDto.typ == ""
    ) throw new HttpException(406,"Unsupported data")
    else await this.furnaceService.create(furnaceDto);
    const token = this.authService.createToken(foundUser);
    if (!token)
      throw new HttpException(500, "Internal error, unable to create token");
    res.send(token).status(200);
  }
}
export default LoginController;
