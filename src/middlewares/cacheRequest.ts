import { NextFunction, Request, Response } from "express";
import { CacheClass } from "memory-cache";

/**
 * Creates a middleware to cache requests in memory.
 * Data is stored in cache for the specified duration.
 * @param duration Storage duration in seconds
 * @param cache Cache to store the request-response pair
 * @returns Middleware function
 */
export default function cacheRequest(duration: number, cache: CacheClass<string, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const key = "__express__" + req.originalUrl;
        const cachedBody = cache.get(key);

        if (cachedBody) {
            res.json(cachedBody);
        } else {
            (res as any).jsonOriginal = res.json;
            (res as any).json = (body: any) => {
                cache.put(key, body, duration * 1000);
                (res as any).jsonOriginal(body);
            };
            next();
        }
    };
}