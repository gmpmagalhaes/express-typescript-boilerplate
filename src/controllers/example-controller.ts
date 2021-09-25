import { RequestHandler } from "express";
import { CommonController } from "../models";

class ExampleController extends CommonController {
    constructor() {
        super('example', '/example');
    }
    configureRouter(): void {
        this.router.post('/', ExampleController.example);
    }

    static example: RequestHandler = (_req,res,_next) => {
        res.status(200).send('example');
    }
}

export default new ExampleController;