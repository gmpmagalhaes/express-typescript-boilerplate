import { ErrorRequestHandler } from "express";
import { logger } from "../util";

const errorLogger: ErrorRequestHandler = (err, _req, _res, next): void => {
    logger.error(err);
    next(err);
}

export default errorLogger;