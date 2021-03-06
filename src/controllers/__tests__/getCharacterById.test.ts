import Character from "../../models/character";
import getCharacterById from "../getCharacterById";
import { Request } from "jest-express/lib/request";
import { Response } from "jest-express/lib/response";
import RequestError from "../../models/requestError";

describe("Get character by ID using the controller", () => {
    let characterService: any;
    let req: any;
    let res: any;

    beforeEach(() => {
        characterService = {
            characterById: jest.fn()
        };

        req = new Request();

        res = new Response();
    });

    it("should get character info from the character service given a valid ID", async () => {
        characterService.characterById.mockResolvedValue({
            id: 1,
            name: "Character 1",
            description: "Description for Character 1"
        } as Character);

        const sut = getCharacterById(characterService);
        req.setParams("characterId", "1");

        await sut(req, res);

        expect(characterService.characterById).toBeCalledWith(1);
        expect(res.json).toBeCalledWith({
            id: 1,
            name: "Character 1",
            description: "Description for Character 1"
        });
    });

    it("should throw error given a non-integer ID", async () => {
        const sut = getCharacterById(characterService);
        req.setParams("characterId", "nonInteger");

        await expect(sut(req, res)).rejects.toThrow(new RequestError(400, "Character ID must be an integer."));

        expect(characterService.characterById).not.toBeCalled();
        expect(res.json).not.toBeCalled();
    });
});