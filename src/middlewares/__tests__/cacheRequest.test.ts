import { Response } from "jest-express/lib/response";
import cacheRequest from "../cacheRequest";

describe("Middleware for caching requests", () => {
    let cache: any;
    let req: any;
    let res: any;
    let next: any;

    beforeEach(() => {
        cache = {
            get: jest.fn(),
            put: jest.fn()
        };
        req = {
            originalUrl: "/characters"
        };
        res = new Response();
        next = jest.fn();
    });

    it("should get cached body if there is one", () => {
        cache.get.mockReturnValue([ 101, 102, 103 ]);
        const duration = 172800;
        cacheRequest(duration, cache)(req, res, next);

        expect(cache.get).toBeCalledWith("__express__/characters");
        expect(res.json).toBeCalledWith([ 101, 102, 103 ]);
        expect(next).not.toBeCalled();
    });

    it("should call next function in stack if there is no cached body", () => {
        cache.get.mockReturnValue(undefined);
        const duration = 172800;
        cacheRequest(duration, cache)(req, res, next);

        expect(cache.get).toBeCalledWith("__express__/characters");
        expect(res.jsonOriginal).not.toBeCalled();
        expect(next).toBeCalled();
    });

    it("should store JSON object in cache if there is no cached body and res.json() is called", () => {
        cache.get.mockReturnValue(undefined);
        const duration = 172800;
        cacheRequest(duration, cache)(req, res, next);

        res.json([ 101, 102, 103 ]);

        expect(cache.put).toBeCalledWith(
            "__express__/characters",
            [ 101, 102, 103 ],
            172800000);
        expect(res.jsonOriginal).toBeCalledWith([ 101, 102, 103 ]);
    });
});