import express from "express";
import getCharacter from "./controllers/GetCharacter";
import getCharacterIds from "./controllers/getCharacterIds";
import config from "./config";
import CharacterService from "./services/characterService";
import MarvelApiClient from "./services/marvelApiClient";
import catchErrors from "./controllers/catchErrors";
import errorHandler from "./middlewares/errorHandler";
import { Cache } from "memory-cache";
import cacheRequest from "./middlewares/cacheRequest";

const PORT = 8080;
const CACHE_DURATION = 172800; // 2 days

const app = express();
const marvelApiClient = new MarvelApiClient(config.PublicKey, config.PrivateKey);
const characterService = new CharacterService(marvelApiClient, config.RootUrl, config.CharactersRelativeUrl);
const characterRouter = express.Router();
const cache = new Cache<string, any>();

// Register Cache Middleware
app.use(cacheRequest(CACHE_DURATION, cache));

// Register routes
characterRouter.get("/", catchErrors(getCharacterIds(characterService)));

characterRouter.get("/:characterId", catchErrors(getCharacter(characterService)));

app.use("/characters", characterRouter);

// Register error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
