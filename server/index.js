import express from "express";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
    path: __dirname + "/.env",
});

const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("GG");
});

app.listen(port, () => {
    console.log("Listening on port:", port);
});
