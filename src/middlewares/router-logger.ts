import { RequestHandler } from "express";
import { logger } from "../util";

const routeLogger: RequestHandler = (req,_res,next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
}

export default routeLogger;