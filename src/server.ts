import express from "express";
import getCharacter from "./controllers/GetCharacter";
import getCharacterIds from "./controllers/getCharacterIds";
import config from "./config";
import CharacterService from "./services/characterService";
import MarvelApiClient from "./services/marvelApiClient";
import catchErrors from "./controllers/catchErrors";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const PORT = 8080;

const marvelApiClient = new MarvelApiClient(config.PublicKey, config.PrivateKey);
const characterService = new CharacterService(marvelApiClient, config.RootUrl, config.CharactersRelativeUrl);
const characterRouter = express.Router();

characterRouter.get("/", catchErrors(getCharacterIds(characterService)));

characterRouter.get("/:characterId", catchErrors(getCharacter(characterService)));

app.use("/characters", characterRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
