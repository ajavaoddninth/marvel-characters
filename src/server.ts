import express from "express";
import getCharacter from "./controllers/GetCharacter";
import getCharacterIds from "./controllers/GetCharacterIds";
import config from "./config";
import CharacterService from "./services/CharacterService";
import MarvelApiClient from "./services/MarvelApiClient";

const app = express();
const PORT = 8080;

const marvelApiClient = new MarvelApiClient(config.PublicKey, config.PrivateKey);
const characterService = new CharacterService(marvelApiClient, config.RootUrl, config.CharactersRelativeUrl);
const characterRouter = express.Router();

characterRouter.get("/", getCharacterIds(characterService));

characterRouter.get("/:characterId", getCharacter(characterService));

app.use("/characters", characterRouter);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
