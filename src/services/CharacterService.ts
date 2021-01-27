import Character from "../models/Character";
import ICharacterService from "./ICharacterService";
import IMarvelApiClient from "./IMarvelApiClient";

export default class CharacterService implements ICharacterService {
    constructor(
        private client: IMarvelApiClient,
        private rootUrl: string = "http://gateway.marvel.com",
        private charactersRelativeUrl: string = "/v1/public/characters") {}

    /** @inheritdoc */
    public async characters(): Promise<Character[]> {
        const url = new URL(this.charactersRelativeUrl, this.rootUrl);
        url.searchParams.set("limit", "100");
        return this.client.fetchResources<Character>(
            url,
            this.formatResourceToCharacter
        );
    }

    /** @inheritdoc */
    public async characterById(characterId: number): Promise<Character> {
        const models = await this.client.fetchResources<Character>(
            new URL(`${this.charactersRelativeUrl}/${characterId}`, this.rootUrl),
            this.formatResourceToCharacter
        );

        // Expected item count is 1
        return models.pop();
    }

    private formatResourceToCharacter(resource: any): Character {
        return {
            id: resource.id,
            name: resource.name,
            description: resource.description
        } as Character;
    }
}