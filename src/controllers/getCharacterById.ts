import { Request, Response } from "express";
import RequestError from "../models/requestError";
import ICharacterService from "../services/characterService.interface";

/**
 * Returns a controller function that gets a specific Marvel characters
 * using its ID and sends its ID, name and description in JSON.
 * @param characterService Service for Marvel characters
 * @returns Controller function to be used in Express app
 */
export default function getCharacterById(characterService: ICharacterService) {
    return async (req: Request, res: Response) => {
        const characterId = +req.params.characterId;

        if (!Number.isInteger(characterId)) {
            throw new RequestError(400, "Character ID must be an integer.");
        }

        const character = await characterService.characterById(characterId);

        return res.json(character);
    };
}