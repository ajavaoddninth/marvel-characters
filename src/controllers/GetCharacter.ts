import { Request, Response } from "express";
import ICharacterService from "../services/ICharacterService";

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