import Character from "../models/Character";
import ICharacterService from "./ICharacterService";

export default class MockCharacterService implements ICharacterService {
    private characterList: Character[] = [
        {
            id: 1,
            name: "Character 1",
            description: "Description for character 1"
        },
        {
            id: 2,
            name: "Character 2",
            description: "Description for character 2"
        },
        {
            id: 3,
            name: "Character 3",
            description: "Description for character 3"
        }
    ];

    public async characters(): Promise<Character[]> {
        return this.characterList;
    }

    public async characterById(characterId: number): Promise<Character> {
        return this.characterList.find(character => character.id === characterId);
    }
}