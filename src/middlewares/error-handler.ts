import { ErrorRequestHandler } from "express";
import {ApplicationException} from "../exceptions";

interface ErrorFormat {
    path: string;
    status: number;
    title: string;
    detail: string;
    timestamp: string;
}

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    const path = req.path;
    const status = err.status || 500;
    const title = err instanceof ApplicationException ? err.title : err.name;
    const errFormat: ErrorFormat = {
        path,
        status,
        title,
        detail: err.message,
        timestamp: new Date().toISOString(),
    }
    return res.status(status).json(errFormat);
}

export default errorHandler;