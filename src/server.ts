import express from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import characterRouter from "./routes/character.routes";

const SERVER_PORT = 8080;

const app = express();
const swaggerDocument = yaml.load("./swagger.yaml");

app.use("/characters", characterRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(SERVER_PORT, () => {
    console.log(`[INFO]: Server is running at http://localhost:${SERVER_PORT}`);
});
