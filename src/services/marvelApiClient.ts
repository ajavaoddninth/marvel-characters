import IMarvelApiClient from "./marvelApiClient.interface";
import crypto from "crypto";
import fetch from "node-fetch";
import RequestError from "../models/requestError";

/**
 * Contains metadata about the call
 */
interface DataWrapper {
    // The HTTP status code of the returned result
    code: number;

    // A string description of the call status
    status: string;

    // The results returned by the call
    data: DataContainer
}

/**
 * Displays pagination information and an array of the results returned by the call
 */
interface DataContainer {
    // The requested offset (skipped results) of the call
    offset: number;

    // The requested result limit
    limit: number;

    // The total number of results available
    total: number;

    // The total number of results returned by this call
    count: number;

    // The list of entities returned by the call
    results: any[];
}

interface ErrorWrapper {
    // The HTTP status code of the error
    code: number;

    // A string description of the error
    status: string;
}

export default class MarvelApiClient implements IMarvelApiClient {
    constructor(
        private publicKey: string,
        private privateKey: string) {}

    /** @inheritdoc */
    public async fetchResources<TModel>(
        resourceUrl: URL,
        formatResource: (resource: any) => TModel): Promise<TModel[]> {
        let page: DataWrapper | undefined;
        let models: TModel[] = [];

        do {
            const timestamp = Date.now();
            const hash = crypto
                .createHash("md5")
                .update(`${timestamp}${this.privateKey}${this.publicKey}`)
                .digest("hex");

            const urlObject = new URL(resourceUrl.toString());

            urlObject.searchParams.set("ts", timestamp.toString());
            urlObject.searchParams.set("apikey", this.publicKey);
            urlObject.searchParams.set("hash", hash);

            if (page) {
                const offset = page.data.offset + page.data.count;
                urlObject.searchParams.set("offset", offset.toString());
            }

            const response = await fetch(urlObject.toString()).catch(() => {
                throw new RequestError(500, "An unknown error occurred while fetching requests.")
            });

            const content = await response.json().catch(() => {
                throw new RequestError(500, "Response format from the Marvel API is unknown.")
            });

            if (!response.ok) {
                const errorWrapper = content as ErrorWrapper;
                throw new RequestError(errorWrapper.code, errorWrapper.status);
            }

            page = content as DataWrapper;

            models = models.concat(page.data.results.map(value => formatResource(value)));

        } while(page.data.count + page.data.offset < page.data.total);

        return models;
    }
}