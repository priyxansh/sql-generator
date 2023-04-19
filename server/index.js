const express = require("express");
const dotenv = require("dotenv");

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
