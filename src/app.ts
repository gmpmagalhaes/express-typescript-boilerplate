import express, { Application } from "express";
import { errorHandler, errorLogger } from "./middlewares";

const app: Application = express();
app.set('port', process.env.PORT || 8080);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(errorLogger);
app.use(errorHandler);

export default app;