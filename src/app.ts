import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());



app.get("/", (req: Request, res: Response) => {
const result = "Hello Car Wash Center !!!"
  res.send(result);
});


export default app;