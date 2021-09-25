import { Router } from "express";

export default interface Controller {
    path: string;
    name: string;
    router: Router;
}