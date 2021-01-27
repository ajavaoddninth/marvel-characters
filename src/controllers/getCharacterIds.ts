import { Request, Response } from "express";
import ICharacterService from "../services/characterService.interface";

/**
 * Returns a controller function that gets the Marvel characters
 * and sends their IDs in JSON.
 * @param characterService Service for Marvel characters
 * @returns Controller function to be used in Express app
 */
export default function getCharacterIds(characterService: ICharacterService) {
    return async (_: Request, res: Response) => {
        const characters = await characterService.characters();
        const characterIds = characters.map(character => character.id);

        return res.json(characterIds);
    };
}