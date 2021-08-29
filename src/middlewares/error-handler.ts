import { ErrorRequestHandler } from "express";
import ApplicationError from "../util/application-error";
import logger from "../util/logger";

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    logger.error(err);
    if (err instanceof ApplicationError) {
        return res.status(err.status || 500).json(err);
    }
    return next(err);
}

export default errorHandler;