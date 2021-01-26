import Character from "../models/Character";

export default interface ICharacterService {
    characters(): Promise<Character[]>;

    characterById(characterId: number): Promise<Character>;
}