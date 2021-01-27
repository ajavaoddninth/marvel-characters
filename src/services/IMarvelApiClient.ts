export default interface IMarvelApiClient {
    /**
     * Fetch resources from Marvel API using the given resource URL.
     * Pagination is also handled in the client.
     * @param resourceUrl Resource URL to fetch resources from
     * @param formatResource Function to format the resource from Marvel API
     * @returns A promise containing the list of resources
     */
    fetchResources<TModel>(
        resourceUrl: string,
        formatResource: (resource: any) => TModel): Promise<TModel[]>;
}