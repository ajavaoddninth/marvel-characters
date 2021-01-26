import Character from "../models/Character";
import ICharacterService from "./ICharacterService";

export default class CharacterService implements ICharacterService {
    /** @inheritdoc */
    public async characters(): Promise<Character[]> {
        throw new Error("Method not implemented.");
    }

    /** @inheritdoc */
    public async characterById(characterId: number): Promise<Character> {
        throw new Error("Method not implemented.");
    }
}