import { ErrorRequestHandler } from "express";
import { logger } from "../util";

const errorLogger: ErrorRequestHandler = (err, req, res, next): void => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const timestamp = err.timestamp || new Date().toISOString();
    const error = {
        status,
        message,
        timestamp,
        origin: req.ip,
        user: res.locals.username || '',
        method: req.method,
        path: req.path,
    }
    logger.error(error);
    next(err);
}

export default errorLogger;