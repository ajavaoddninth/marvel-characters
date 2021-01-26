import express from "express";
import getCharacter from "./controllers/GetCharacter";
import getCharacterIds from "./controllers/GetCharacterIds";
import MockCharacterService from "./services/MockCharacterService";

const app = express();
const PORT = 8080;

const characterService = new MockCharacterService();
const characterRouter = express.Router();

characterRouter.get("/", getCharacterIds(characterService));

characterRouter.get("/:characterId", getCharacter(characterService));

app.use("/characters", characterRouter);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
