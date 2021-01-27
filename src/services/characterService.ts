import Character from "../models/character";
import ICharacterService from "./characterService.interface";
import IMarvelApiClient from "./marvelApiClient.interface";

export default class CharacterService implements ICharacterService {
    private limit = 100;
    constructor(
        private client: IMarvelApiClient,
        private rootUrl: string,
        private charactersRelativeUrl: string) {}

    /** @inheritdoc */
    public async characters(): Promise<Character[]> {
        const url = new URL(this.charactersRelativeUrl, this.rootUrl);
        url.searchParams.set("limit", this.limit.toString());
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