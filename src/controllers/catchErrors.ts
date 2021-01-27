import { NextFunction, Request, Response } from "express";

/**
 * Helper function to catch errors from async controllers
 * and passing it to the NextFunction.
 * @param controller Controller to call
 * @returns Wrapped controller that will catch errors
 */
export default function catchErrors(controller: (req: Request, res: Response) => Promise<any>) {
    return async (req: Request, res: Response, next: NextFunction) => controller(req, res).catch(next);
}