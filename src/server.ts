import express, { Request, Response } from "express";
import getCharacterIds from "./controllers/GetCharacterIds";
import MockCharacterService from "./services/MockCharacterService";

const app = express();
const PORT = 8080;

const characterService = new MockCharacterService();
const characterRouter = express.Router();

characterRouter.get("/", getCharacterIds(characterService));

characterRouter.get("/:characterId", (req: Request, res: Response) => {
    res.send(`Route to get character info. Character to get has ID ${req.params.characterId}`);
});

app.use("/characters", characterRouter);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
