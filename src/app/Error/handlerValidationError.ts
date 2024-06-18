import mongoose from "mongoose";
import { CErrorSources, CGenericErrorResponse } from "../Interface/error";




const handlerValidationError = (
    err: mongoose.Error.ValidationError,
  ): CGenericErrorResponse => {
    const errorSources: CErrorSources = Object.values(err.errors).map(
      (vaL: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        return {
          path: vaL.path,
          message: vaL.message,
        };
      },
    );
  
    const statusCode = 400;
    return {
      statusCode,
      message: "Validation Error",
      errorSources,
    };
  };
  
  export default handlerValidationError;