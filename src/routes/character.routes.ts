import express from "express";
import { Cache } from "memory-cache";
import config from "../config";
import CharacterService from "../services/characterService";
import MarvelApiClient from "../services/marvelApiClient";
import cacheRequest from "../middlewares/cacheRequest";
import errorHandler from "../middlewares/errorHandler";
import catchErrors from "../controllers/catchErrors";
import getCharacterIds from "../controllers/getCharacterIds";
import getCharacterById from "../controllers/getCharacterById";

const marvelApiClient = new MarvelApiClient(config.publicKey, config.privateKey);
const characterService = new CharacterService(marvelApiClient, config.rootUrl, config.charactersRelativeUrl);
const characterRouter = express.Router();
const cache = new Cache<string, any>();

// Register Cache Middleware
characterRouter.use(cacheRequest(config.requestCacheDuration, cache));

// Register routes
characterRouter.get("/", catchErrors(getCharacterIds(characterService)));

characterRouter.get("/:characterId", catchErrors(getCharacterById(characterService)));

// Register error handler
characterRouter.use(errorHandler);

export default characterRouter;