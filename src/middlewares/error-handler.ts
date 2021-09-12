import {ErrorRequestHandler} from "express";
import {isHttpError} from "http-errors";

interface ErrorFormat {
    path: string;
    status: number;
    message: string;
    detail?: string;
    timestamp: string;
}

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    const path = req.path;
    const status = err.status || 500;
    const errFormat: ErrorFormat = {
        path,
        status,
        message: isHttpError(err) ? err.message : 'Internal Server Error',
        timestamp: err.timestamp,
    }
    return res.status(status).json(errFormat);
}

export default errorHandler;