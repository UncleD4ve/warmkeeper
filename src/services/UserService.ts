import { CRUD } from "../types/interfaces/crud.interface";
import { User } from "../types/models";
import userModel from "../dao/user.model";
import * as bcrypt from "bcrypt";
import { CreateUserDto, LoginUserDto, PutUserDto } from "../dto";
import { HttpException } from "../exceptions";
class UserService implements CRUD<User | string> {
  private validator : RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
  private dbContext = userModel;
  constructor() {}

  async list(): Promise<Array<User> | null> {
    const userContext = await this.dbContext.find();
    return userContext as Array<User>;
  }
  async create(resource: CreateUserDto): Promise<User | null> {
    if (!resource) throw new HttpException(400, "Given resources is empty");
    const found =
      (await this.dbContext.findOne({ username: resource.username })) ||
      (await this.dbContext.findOne({ email: resource.email }));
    if (found) throw new HttpException(406, "Username or email is already taken");
    if(this.validator.test(resource.password) == false) 
      throw new HttpException(400, "Password need to contain at least 8 characters with 1 uppercase,lowercase,digit and special characters")
    const hash = await bcrypt.hash(resource.password, 10);
    const createdUser = await this.dbContext.create({
      ...resource,
      password: hash
    });
    return createdUser as User;
  }
  async putById(id: string, resource: PutUserDto): Promise<User | null> {
    const userContext = await this.dbContext.findById(id);
    if (!resource) throw new HttpException(400, "Given resources are empty");
    if (!userContext) return null;
    let hash = "";
    if (!(await bcrypt.compare(resource.password, userContext.password)) && resource.password !== "" 
    && resource.password !== null && resource.password !== undefined )
    {
      if(this.validator.test(resource.password) == false) 
      throw new HttpException(400, "Password need to contain at least 8 characters with 1 uppercase,lowercase,digit and special characters")
      hash = await bcrypt.hash(resource.password, 10);
    }
    hash = hash || userContext.password;
    Object.assign(userContext, {...resource,
      id: userContext.id,
      password: hash
    });
    await userContext.save();
    return userContext as User;
  }
  async readById(id: string): Promise<User | null> {
    const userContext = await this.dbContext.findById(id);
    if (!userContext) return null;
    return userContext as User;
  }
  async deleteById(id: string): Promise<string | null> {
    const userContext = await this.dbContext.findById(id);
    if (!userContext) return null;
    await userContext.deleteOne();
    return `User has been removed. \n Given mail: ${userContext.email} \n Given username: ${userContext.username}`;
  }
  async patchById(id: string, resource: PutUserDto): Promise<User | null> {
    const userContext = await this.dbContext.findById(id);
    if (!userContext) return null;
    if (userContext.username != resource.username && resource.username != null)
      {
        Object.assign(userContext, {username: resource.username });+
      await userContext.save();
     }
    if (userContext.email != resource.email && resource.email != null)
      {
        Object.assign(userContext, {email: resource.email });
      await userContext.save();
    }
    if (userContext.fullname != resource.fullname && resource.fullname != null)
      {
        Object.assign(userContext, {fullname: resource.fullname });
      await userContext.save();
    }
    if (userContext.password != resource.password && resource.password) {
      if (!this.validator.test(resource.password)) 
        throw new HttpException(400, "Password need to contain at least 8 characters with 1 uppercase,lowercase,digit and special characters")
      const hash = await bcrypt.hash(resource.password, 10);
      Object.assign(userContext, {password: hash });
      await userContext.save();
    };
    return userContext as User;
  }
  async get(requestedUser: LoginUserDto): Promise<User | null> {
    const userContext = await this.dbContext.findOne({username:requestedUser.username});
    if(userContext && await bcrypt.compare(requestedUser.password, userContext.password))
      return userContext as User;
    else
      return null;
  }
}
export default UserService;
/*
public async findUser(): Promise<User> {
    return Promise.resolve(() => ({} as User));
  }
  public async getUsers(): Promise<Array<User>> {
    return;
  }
  public async create(user: User): Promise<User> {
    return;
  }
  public async update(id: number, user: User): Promise<User> {
    return;
  }
  public async delete(id: number): Promise<void> {
    return;
  }

*/
/*
const isUsernameTaken = await this.dbContext.find({
      username: resource.username,
    })[0];
    if (isUsernameTaken)
      throw new HttpException(
        418,
        'Username "' + resource.username + '" is already taken'
      );
    console.log(
      (await this.dbContext.find({ email: resource.email }))[0],
      "here DEBUGGING XD"
    );
    if ((await this.dbContext.find({ email: resource.email })).length != 1)
      throw new HttpException(
        406,
        'Usermail "' + resource.email + '" is already taken'
      );


*/
