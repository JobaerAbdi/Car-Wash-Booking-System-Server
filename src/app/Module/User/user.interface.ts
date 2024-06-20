import { USER_Role } from "./user.consatand";

export interface CUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role:keyof typeof USER_Role;
  address: string;
}
