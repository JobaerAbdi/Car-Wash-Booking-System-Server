import { Schema, model } from "mongoose";
import { CUser } from "./user.interface";
import { USER_Role } from "./user.consatand";


export const CUserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: Object.keys(USER_Role) },
    address: { type: String, required: true }
  },{
    timestamps:true
  });
  
 export const User =model<CUser>('User', CUserSchema);