import Character from "../models/Character";
import ICharacterService from "./ICharacterService";
import IMarvelApiClient from "./IMarvelApiClient";

export default class CharacterService implements ICharacterService {
    constructor(
        private client: IMarvelApiClient,
        private rootUrl: string = "http://gateway.marvel.com",
        private charactersRelativeUrl: string = "v1/public/characters") {}

    /** @inheritdoc */
    public async characters(): Promise<Character[]> {
        return this.client.fetchResources<Character>(
            `${this.rootUrl}/${this.charactersRelativeUrl}`,
            this.formatResourceToCharacter
        );
    }

    /** @inheritdoc */
    public async characterById(characterId: number): Promise<Character> {
        throw new Error("Method not implemented.");
    }

    private formatResourceToCharacter(resource: any): Character {
        return {
            id: resource.id,
            name: resource.name,
            description: resource.description
        } as Character;
    }
}