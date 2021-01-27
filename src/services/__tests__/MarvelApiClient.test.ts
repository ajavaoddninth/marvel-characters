import fetchMock from "jest-fetch-mock";
import Character from "../../models/Character";
import MarvelApiClient from "../MarvelApiClient";
import { EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE, EXPECTED_MODELS_FOR_SINGLE_PAGE_RESPONSE, MULTIPLE_PAGE_RESPONSE_PAGE_1, MULTIPLE_PAGE_RESPONSE_PAGE_2, MULTIPLE_PAGE_RESPONSE_PAGE_3, SINGLE_PAGE_RESPONSE } from "./setupData";

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
        fetchMock.mockResponseOnce(JSON.stringify(SINGLE_PAGE_RESPONSE));

        const sut = new MarvelApiClient("1234", "abcd");

        const actualResponse = await sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters/1011334"), formatResource);

        expect(actualResponse).toEqual(EXPECTED_MODELS_FOR_SINGLE_PAGE_RESPONSE);
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(formatResource).toBeCalledWith({
            "id": 1011334,
            "name": "3-D Man",
            "description": "",
            "modified": "2014-04-29T14:18:17-0400"
        });
    });

    it("should fetch resources from URL with a multiple page response", async () => {
        fetchMock
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_1))
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_2))
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_3));

        const sut = new MarvelApiClient("1234", "abcd");

        const actualResponse = await sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters"), formatResource);

        expect(actualResponse).toEqual(EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE);
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=20");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=40");
        expect(formatResource).toBeCalledTimes(50);
    });

    it("should fetch resources from URL with query parameters with a multiple page response", async () => {
        fetchMock
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_1))
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_2))
            .mockResponseOnce(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_3));

        const sut = new MarvelApiClient("1234", "abcd");

        const url = new URL("http://gateway.marvel.com/v1/public/characters");
        url.searchParams.set("limit", "20");

        const actualResponse = await sut.fetchResources(url, formatResource);

        expect(actualResponse).toEqual(EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE);
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=20");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=40");
        expect(formatResource).toBeCalledTimes(50);
    });
});