import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validationRequest = (Schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Schema.parseAsync({ body: req.body });
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.errors.map((error) => ({
            path: error.path,
            message: error.message,
            err: err.name,
          })),
        });
      }
      next(err);
    }
  };
};

export default validationRequest;
