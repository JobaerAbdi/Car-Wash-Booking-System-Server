import { Schema, model } from "mongoose";
import { CUser } from "./user.interface";
import { USER_Role } from "./user.consatand";
import bcrypt from 'bcrypt';
import config from "../../config";

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

  //pre save middlewere
  CUserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password as string, Number(config.data_salt_rounds));
  next();
});

//post save middlerware hook
CUserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});


 export const User =model<CUser>('User', CUserSchema);