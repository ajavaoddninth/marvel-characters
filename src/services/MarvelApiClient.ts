import IMarvelApiClient from "./IMarvelApiClient";

/**
 * Contains metadata about the call
 */
export interface DataWrapper<TModel> {
    // The HTTP status code of the returned result
    code: number;

    // A string description of the call status
    status: string;

    // The results returned by the call
    data: DataContainer<TModel>
}

/**
 * Displays pagination information and an array of the results returned by the call
 */
export interface DataContainer<TModel> {
    // The requested offset (skipped results) of the call
    offset: number;

    // The requested result limit
    limit: number;

    // The total number of results available
    total: number;

    // The total number of results returned by this call
    count: number;

    // The list of entities returned by the call
    results: TModel[];
}

export interface ErrorWrapper {
    // The HTTP status code of the error
    code: number;

    // A string description of the error
    status: string;
}

export default class MarvelApiClient implements IMarvelApiClient {
    /** @inheritdoc */
    public async fetchResources<TModel>(resourcePath: string, queryParams?: { [key: string]: string; }): Promise<TModel[]> {
        throw new Error("Method not implemented.");
    }
}