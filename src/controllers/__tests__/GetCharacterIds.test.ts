import Character from "../../models/Character";
import getCharacterIds from "../GetCharacterIds";
import { Response } from "jest-express/lib/response";

describe("Get character IDs", () => {
    let characterService: any;
    let res: any;

    beforeEach(() => {
        characterService = {
            characters: jest.fn()
        };

        res = new Response();
    });

    it("should get character IDs from the character service", async () => {
        characterService.characters.mockResolvedValue([
            {
                id: 1,
                name: "Character 1",
                description: "Description for Character 1"
            } as Character,
            {
                id: 2,
                name: "Character 2",
                description: "Description for Character 2"
            } as Character,
            {
                id: 3,
                name: "Character 3",
                description: "Description for Character 3"
            } as Character
        ]);

        const sut = getCharacterIds(characterService);

        await sut(undefined, res);

        expect(characterService.characters).toBeCalled();
        expect(res.json).toBeCalledWith([
            1,
            2,
            3
        ]);
    });
});