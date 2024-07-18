// src/app.ts
import express, { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";

import { urlencoded, json } from "body-parser";

export const app = express();

// Use body parser to read sent json payloads
app.use(
    urlencoded({
        extended: true,
    })
);

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});
app.use(json());

RegisterRoutes(app);