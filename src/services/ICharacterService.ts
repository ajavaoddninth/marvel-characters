import Character from "../models/Character";

export default interface ICharacterService {
    /**
     * Gets the whole list of Marvel characters
     * @returns A promise containing the list of characters
     */
    characters(): Promise<Character[]>;

    /**
     * Get a single Marvel character using the character ID
     * @param characterId A promise containing the found character
     */
    characterById(characterId: number): Promise<Character>;
}