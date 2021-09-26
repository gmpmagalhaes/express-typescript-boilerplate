import { ErrorRequestHandler } from "express";
import HttpException from "../exceptions/http-exception";

interface ErrorResponse {
    path: string;
    status: number;
    message: string;
    detail?: string;
    timestamp: string;
}

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    const status = err.status || 500;
    const message = err instanceof HttpException ? err.message || 'Internal Server Error' : 'Internal Server Error';
    const timestamp = err.timestamp || new Date().toISOString();
    const path = req.path;
    const error: ErrorResponse = {
        path,
        status,
        message,
        timestamp,
    }
    res.status(status).send(error);
}

export default errorHandler;