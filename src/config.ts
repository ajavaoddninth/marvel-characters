import dotenv from "dotenv";

dotenv.config();

export default {
    publicKey: process.env.MARVEL_API_PUBLIC_KEY ?? "",
    privateKey: process.env.MARVEL_API_PRIVATE_KEY ?? "",
    rootUrl: process.env.MARVEL_API_ROOT_URL ?? "http://gateway.marvel.com",
    charactersRelativeUrl: process.env.MARVEL_API_CHARACTERS_RELATIVE_URL ?? "/v1/public/characters",
    requestCacheDuration: +(process.env.REQUEST_CACHE_DURATION ?? 86400) // 1 day
};