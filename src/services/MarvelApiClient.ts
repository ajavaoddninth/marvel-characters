import IMarvelApiClient from "./IMarvelApiClient";
import crypto from "crypto";

/**
 * Contains metadata about the call
 */
export interface DataWrapper {
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
export interface DataContainer {
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

export interface ErrorWrapper {
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
        resourceUrl: string,
        formatResource: (resource: any) => TModel): Promise<TModel[]> {
        const timestamp = Date.now();
        const hash = crypto
            .createHash("md5")
            .update(`${timestamp}${this.privateKey}${this.publicKey}`)
            .digest("hex");

        const urlObject = new URL(resourceUrl);

        urlObject.searchParams.set("ts", timestamp.toString());
        urlObject.searchParams.set("apikey", this.publicKey);
        urlObject.searchParams.set("hash", hash);

        return fetch(urlObject.toString())
            .then(res => res.json())
            .then(json => {
                const wrapper = json as DataWrapper;
                return wrapper.data.results.map((value: any) => formatResource(value));
            });
    }
}