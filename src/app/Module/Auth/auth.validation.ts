import { z } from "zod";

const loginValidatoinSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required." }),
    password: z.string({ required_error: "Passerod is required " }),
  }),
});

// Validation schema for refresh token
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: "Refresh token is required !",
    }),
  }),
});

export const AuthValidation = {
  loginValidatoinSchema,
  refreshTokenValidationSchema
};
