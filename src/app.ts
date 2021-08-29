import express, { Application } from "express";
import errorHandler from "./middlewares/error-handler";
const app: Application = express();

app.set('port', process.env.PORT || 8080);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(errorHandler);

export default app;