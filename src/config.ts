import dotenv from "dotenv";

dotenv.config();

export default {
    PublicKey: process.env.MARVEL_API_PUBLIC_KEY ?? "",
    PrivateKey: process.env.MARVEL_API_PRIVATE_KEY ?? "",
    RootUrl: process.env.MARVEL_API_ROOT_URL ?? "http://gateway.marvel.com",
    CharactersRelativeUrl: process.env.MARVEL_API_CHARACTERS_RELATIVE_URL ?? "/v1/public/characters",
    RequestCacheDuration: +process.env.REQUEST_CACHE_DURATION ?? 172800 // 2 days
};