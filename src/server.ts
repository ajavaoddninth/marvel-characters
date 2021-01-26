import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

const characterRouter = express.Router();

characterRouter.get("/", (req: Request, res: Response) => {
    res.send("Route to get character IDs");
});

characterRouter.get("/:characterId", (req: Request, res: Response) => {
    res.send(`Route to get character info. Character to get has ID ${req.params.characterId}`);
});

app.use("/characters", characterRouter);

app.listen(PORT, () => {
    console.log(`[INFO]: Server is running at https://localhost:${PORT}`);
});
