import bcryptjs from 'bcrypt'
import jwt from "jsonwebtoken";

export const createToken = (
  JwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string
) => {
   return jwt.sign(JwtPayload, secret, {
    expiresIn,
  });
};


export const isPasswordMatched = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatched = await bcryptjs.compare(plainPassword, hashedPassword);
  return isMatched;
};