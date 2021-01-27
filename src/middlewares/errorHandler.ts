import { NextFunction, Request, Response } from "express";
import RequestError from "../models/requestError";

export default function errorHandler(err: Error, _: Request, res: Response, next: NextFunction) {
    if (err instanceof RequestError) {
        res.status(err.code).json({
            code: err.code,
            status: err.status
        });
    } else {
        return next(err);
    }
}