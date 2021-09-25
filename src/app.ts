import express, { Application } from "express";
import config from "./config";
import { ExampleController } from "./controllers";
import { Controller } from "./interfaces";
import { errorHandler, errorLogger, routeLogger } from "./middlewares";

const controllers: Controller[] = [
    ExampleController,
];

class App {

    private readonly port = config.port;

    private app: Application;
    constructor(controllers: Controller[]) {
        this.app = express();
        this.initMiddlewares();
        this.initControllers(controllers);
        this.initErrorHandlers();
    }

    private initMiddlewares(): void {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(routeLogger);
    }
    
    private initControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.app.use(controller.path, controller.router);
            console.log(`Configured controller: ${controller.name} at path: ${controller.path}`);
        })
    }

    private initErrorHandlers(): void {
        this.app.use(errorLogger);
        this.app.use(errorHandler);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`App running at on port ${this.port} in ${process.env.NODE_ENV}`);
        });
    }
}

export default new App(controllers);