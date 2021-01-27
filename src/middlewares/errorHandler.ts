import { NextFunction, Request, Response } from "express";
import RequestError from "../models/requestError";

/**
 * Middleware to handle request errors.
 * Sends the request errors in JSON format.
 * @param err Generic error
 * @param res Response object
 * @param next Next function
 */
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