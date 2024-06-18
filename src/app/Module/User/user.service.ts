import { CUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (userData: CUser) => {
  const user = await User.create(userData);
  await user.save();
  return user;
};

export const UserServices = {
  createUser,
};
