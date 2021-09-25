import { Router } from "express";
import { Controller } from "../interfaces";

export default abstract class CommonController implements Controller {
    path: string;
    name: string;
    router: Router;
    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
        this.router = Router();
        this.configureRouter();
    }

    abstract configureRouter(): void;
}