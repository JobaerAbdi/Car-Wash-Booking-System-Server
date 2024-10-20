import mongoose from "mongoose";
import { CErrorSources, CGenericErrorResponse } from "../Interface/error";
const handlerCastError = (
    err: mongoose.Error.CastError,
  ): CGenericErrorResponse => {
    const errorSources: CErrorSources = [
      {
        path: err.path,
        message: err.message,
      },
    ];
  
    const statusCode = 400;
    return {
      statusCode,
      message: "Validation Error",
      errorSources,
    };
  };
  
  export default handlerCastError;
  