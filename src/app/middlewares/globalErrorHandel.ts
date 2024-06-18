import { ErrorRequestHandler } from "express";
import { CErrorSources } from "../Interface/error";
import { ZodError } from "zod";
import config from "../config";
import handlerZodError from "../Error/handlarZodError";
import handlerValidationError from "../Error/handlerValidationError";
import handlerCastError from "../Error/CastErrorHandlar";

const GlobalErrorHandel: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Somoting went wromng !";

  let errorSources: CErrorSources = [
    {
      path: "",
      message: "Something went wrong!",
    },
  ];

  if (err instanceof ZodError) {
    const modifierError = handlerZodError(err);
    statusCode = modifierError.statusCode;
    message = modifierError.message;
    errorSources = modifierError.errorSources;
  }
  
  else if (err?.name === "ValidatorError") {
    const modifierError = handlerValidationError(err);
    statusCode = modifierError?.statusCode;
    message = modifierError?.message;
    errorSources = modifierError?.errorSources;
  } 
  
  else if (err?.name === "CastError") {
    const modifierError = handlerCastError(err);
    statusCode = modifierError?.statusCode;
    message = modifierError?.message;
    errorSources = modifierError?.errorSources;
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  return res.status(statusCode).json({
    sucess: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default GlobalErrorHandel;
