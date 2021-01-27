import { NextFunction, Request, Response } from "express";

export default function catchErrors(controller: (req: Request, res: Response) => Promise<any>) {
    return async (req: Request, res: Response, next: NextFunction) => controller(req, res).catch(next);
}