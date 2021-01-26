export default interface IMarvelApiClient {
    /**
     * Fetch resources from Marvel API using the given resource path.
     * Pagination is also handled in the client.
     * @param resourcePath Relative resource path to fetch resources from
     * @param queryParams Optional query parameters
     * @returns A promise containing the list of resources
     */
    fetchResources<TModel>(resourcePath: string, queryParams?: { [key: string]: string }): Promise<TModel[]>;
}