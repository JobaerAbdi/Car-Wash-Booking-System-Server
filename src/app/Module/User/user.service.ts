import { CUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (userData: CUser) => {
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createUser,
};
