import { ZodError, ZodIssue } from "zod";
import { CErrorSources } from "../Interface/error";



const handlerZodError = (err: ZodError) => {
    const errorSources: CErrorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue.path[issue.path.length - 1] as string, // Ensure path is a string
        message: issue.message,
      };
    });
    const statusCode = 400;
  
    return {
      statusCode,
      message: "Zod Validation Error",
      errorSources,
    };
  };
  
  export default handlerZodError;