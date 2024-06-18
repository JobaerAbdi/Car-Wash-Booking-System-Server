import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//application routes
app.use("/api/v1" , router);

app.get("/", (req: Request, res: Response) => {
const result = "Hello Car Wash Center !!!"
res.send(result);
console.log('MongoDB connected...')
});


export default app;