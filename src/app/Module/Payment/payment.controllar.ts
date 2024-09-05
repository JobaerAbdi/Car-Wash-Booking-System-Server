import { Request, Response } from "express";
import { PaymentServices } from "./payment.service";

const initialeDB = async (req: Request, res: Response) => {
    const result = await PaymentServices.initiale(req.body);
    res.send(result);
  };
  
  export const PaymentControllars = {
    initialeDB,
  };