import { model, Schema, Document } from "mongoose";
import { Furnace } from "../types/models";

const furnaceSchema: Schema = new Schema({
  userId : {type:String},
  name : {type:String},
  typ : {type:String}
},{
  timestamps:true
});
furnaceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) 
  {
    delete ret._id;
  }
});
const furnaceModel = model<Furnace & Document>("furnace", furnaceSchema, "furnace");

export default furnaceModel;
