jest.mock("node-fetch");
import fetch from "node-fetch";
import RequestError from "../../models/requestError";
import { mocked } from "ts-jest/utils";
import Character from "../../models/character";
import MarvelApiClient from "../marvelApiClient";
import {
    EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE,
    EXPECTED_MODELS_FOR_SINGLE_PAGE_RESPONSE,
    MULTIPLE_PAGE_RESPONSE_PAGE_1,
    MULTIPLE_PAGE_RESPONSE_PAGE_2,
    MULTIPLE_PAGE_RESPONSE_PAGE_3,
    SINGLE_PAGE_RESPONSE
} from "./setupData";

describe("Fetch resources using Marvel API", () => {
    let formatResource: jest.Mock<Character, [resource: any]>;
    let dateNowSpy: jest.SpyInstance<number, []>;
    const fetchMock = mocked(fetch, true);
    const { Response } = jest.requireActual("node-fetch");

    beforeAll(() => {
        dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => 1);
        formatResource = jest.fn((resource: any) => ({
            id: resource.id,
            name: resource.name,
            description: resource.description
        } as Character));
    });

    afterAll(() => {
        dateNowSpy.mockRestore();
    });

    beforeEach(() => {
        formatResource.mockClear();
        fetchMock.mockClear();
    });

    it("should fetch resources from URL with a single page response", async () => {
        fetchMock.mockResolvedValueOnce(new Response(JSON.stringify(SINGLE_PAGE_RESPONSE)));

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
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_1)))
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_2)))
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_3)));

        const sut = new MarvelApiClient("1234", "abcd");

        const actualResponse = await sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters"), formatResource);

        expect(actualResponse).toEqual(EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE);
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=20");
        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&offset=40");
        expect(formatResource).toBeCalledTimes(50);
    });

    it("should fetch resources from URL with initial query parameters and a multiple page response", async () => {
        fetchMock
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_1)))
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_2)))
            .mockResolvedValueOnce(new Response(JSON.stringify(MULTIPLE_PAGE_RESPONSE_PAGE_3)));

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

    it("should throw an error if fetching resources encountered an HTTP error status", async () => {
        fetchMock.mockResolvedValueOnce(
            new Response(
                JSON.stringify({ code: 404, status: "We couldn't find that character" }),
                { status: 404 }));

        const sut = new MarvelApiClient("1234", "abcd");

        await expect(sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters/invalid"), formatResource))
            .rejects
            .toThrow(new RequestError(404, "We couldn't find that character"));

        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters/invalid?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(formatResource).not.toBeCalled();
    });

    it("should throw an error if network error occurred while fetching", async () => {
        fetchMock.mockRejectedValueOnce(new Error("Internal server error."));

        const sut = new MarvelApiClient("1234", "abcd");

        await expect(sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters/invalid"), formatResource))
            .rejects
            .toThrow(new RequestError(500, "An unknown error occurred while fetching requests."));

        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters/invalid?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(formatResource).not.toBeCalled();
    });

    it("should throw an error if response is not in JSON format", async () => {
        fetchMock.mockResolvedValueOnce(new Response("Not in JSON format"));

        const sut = new MarvelApiClient("1234", "abcd");

        await expect(sut.fetchResources(new URL("http://gateway.marvel.com/v1/public/characters/1234"), formatResource))
            .rejects
            .toThrow(new RequestError(500, "Response format from the Marvel API is unknown."));

        expect(fetchMock).toBeCalledWith("http://gateway.marvel.com/v1/public/characters/1234?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150");
        expect(formatResource).not.toBeCalled();
    });
});