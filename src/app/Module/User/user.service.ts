import { CUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (userData: CUser) => {
  const result = await User.create(userData);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUser,
  getAllUser
};
