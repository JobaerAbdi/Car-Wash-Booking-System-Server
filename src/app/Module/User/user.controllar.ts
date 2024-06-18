import { UserServices } from "./user.service";




export const register = async (req: Request, res: Response) => {
  const { name, email, password, phone, role, address } = req.body;

  try {
    const user = await UserServices.createUser({ name, email, password, phone, role, address });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
};