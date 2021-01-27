import fetchMock from "jest-fetch-mock";
import Character from "../../models/Character";
import MarvelApiClient from "../MarvelApiClient";

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe("Fetch resources using Marvel API", () => {
    let formatResource: jest.Mock<Character, [resource: any]>;
    let dateNowSpy: jest.SpyInstance<number, []>;

    beforeAll(() => {
        dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => 1);
    });

    afterAll(() => {
        dateNowSpy.mockRestore();
    });

    beforeEach(() => {
        formatResource = jest.fn((resource: any) => ({
            id: resource.id,
            name: resource.name,
            description: resource.description
        } as Character));
    });

    it("should fetch resources from URL with a single page response", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            "code": 200,
            "status": "Ok",
            "copyright": "© 2021 MARVEL",
            "attributionText": "Data provided by Marvel. © 2021 MARVEL",
            "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
            "etag": "55342c8b21941bfea4b795ff85633d9063e1da0e",
            "data": {
                "offset": 0,
                "limit": 20,
                "total": 1,
                "count": 1,
                "results": [
                    {
                        "id": 1011334,
                        "name": "3-D Man",
                        "description": "",
                        "modified": "2014-04-29T14:18:17-0400",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                            "extension": "jpg"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334"
                    }
                ]
            }
        }));

        const expectedResponse = [
            {
                id: 1011334,
                name: "3-D Man",
                description: "",
            } as Character
        ];

        const sut = new MarvelApiClient("1234", "abcd");

        const actualResponse = await sut.fetchResources("http://gateway.marvel.com/v1/public/characters", formatResource);

        expect(actualResponse).toEqual(expectedResponse);
        expect(dateNowSpy).toBeCalled();
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(formatResource).toBeCalledWith({
            "id": 1011334,
            "name": "3-D Man",
            "description": "",
            "modified": "2014-04-29T14:18:17-0400",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                "extension": "jpg"
            },
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334"
        });
    });
});