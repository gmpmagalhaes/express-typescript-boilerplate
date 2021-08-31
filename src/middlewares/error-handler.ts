import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, _res, next) => {
    next(err);
}

export default errorHandler;