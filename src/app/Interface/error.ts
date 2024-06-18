
export type CErrorSources = {
    path: string;
    message: string;
  }[];
  

  export type CGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSources: CErrorSources;
  };
  