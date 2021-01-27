import { Response } from "jest-express/lib/response";
import RequestError from "../../models/requestError";
import errorHandler from "../errorHandler";

describe("Middleware for error handling", () => {
    let res: any;
    let next: any;

    beforeEach(() => {
        res = new Response();
        next = jest.fn();
    });

    it("should send a JSON response (with set HTTP code) for request errors", () => {
        errorHandler(new RequestError(404, "We couldn't find that character"), undefined, res, next);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({
            code: 404,
            status: "We couldn't find that character"
        });
        expect(next).not.toBeCalled();
    });

    it("should next function for non-request errors", () => {
        errorHandler(new Error("Unknown error"), undefined, res, next);

        expect(res.status).not.toBeCalled();
        expect(res.json).not.toBeCalled();
        expect(next).toBeCalledWith(new Error("Unknown error"));
    });
})