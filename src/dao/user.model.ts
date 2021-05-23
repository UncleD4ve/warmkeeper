import { model, Schema, Document } from "mongoose";
import { User } from "../types/models";

const userSchema: Schema = new Schema({
  username: { type: String },
  email: { type: String },
  fullName: { type: String },
  password: { type: String }
},{
  timestamps:true
});
userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) 
  {
  // code used to not return some point of data
  // delete in return _id to get from mongo id parameter
    delete ret._id;
    delete ret.password;
  }
});
const userModel = model<User & Document>("user", userSchema, "user");

export default userModel;
