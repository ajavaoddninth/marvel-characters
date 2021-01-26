import { Request, Response } from "express";
import ICharacterService from "../services/ICharacterService";

/**
 * Returns a controller function that gets a specific Marvel characters
 * using its ID and sends its ID, name and description in JSON.
 * @param characterService Service for Marvel characters
 * @returns Controller function to be used in Express app
 */
export default function getCharacter(characterService: ICharacterService) {
    return async (req: Request, res: Response) => {
        const characterId = +req.params.characterId;

        if (!Number.isInteger(characterId)) {
            throw new Error("Character ID must be an integer.");
        }

        const character = await characterService.characterById(characterId);

        return res.json(character);
    };
}