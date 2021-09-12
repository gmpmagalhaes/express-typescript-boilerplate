import { ErrorRequestHandler } from "express";
import { logger } from "../util";

const errorLogger: ErrorRequestHandler = (err, req, res, next): void => {
    const timestamp = new Date().toISOString();
    const errorObject = {
        status: (err.status || 500).toString(),
        message: err.message ? err.message : 'Internal Server Error',
        timestamp,
        origin: req.ip,
        user: res.locals.username || '',
        method: req.method,
        path: req.path,
    }
    logger.error(errorObject);
    err.timestamp = timestamp;
    next(err);
}

export default errorLogger;