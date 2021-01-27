import Character from "../../models/Character";
import CharacterService from "../CharacterService";

let marvelApiClient: any;

beforeEach(() => {
    marvelApiClient = {
        fetchResources: jest.fn()
    };
});

describe("Get characters using the service", () => {
    it("should get the characters using the service", async () => {
        marvelApiClient.fetchResources.mockResolvedValue([
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

        const expectedResponse = [
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
        ];

        const expectedUrl = new URL("http://gateway.marvel.com/v1/public/characters");
        expectedUrl.searchParams.set("limit", "100");

        const sut = new CharacterService(marvelApiClient);

        const actualResponse = await sut.characters();

        expect(actualResponse).toEqual(expectedResponse);
        expect(marvelApiClient.fetchResources).toBeCalledWith(
            expectedUrl,
            expect.any(Function));
    });
});

describe("Get character by ID using the service", () => {
    it("should get the character that matches given ID using the service", async () => {
        marvelApiClient.fetchResources.mockResolvedValue([
            {
                id: 1,
                name: "Character 1",
                description: "Description for Character 1"
            } as Character
        ]);

        const expectedResponse = {
            id: 1,
            name: "Character 1",
            description: "Description for Character 1"
        } as Character;

        const sut = new CharacterService(marvelApiClient);

        const actualResponse = await sut.characterById(1);

        expect(actualResponse).toEqual(expectedResponse);
        expect(marvelApiClient.fetchResources).toBeCalledWith(
            new URL("http://gateway.marvel.com/v1/public/characters/1"),
            expect.any(Function));
    });
});