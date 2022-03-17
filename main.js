require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("Error", (error) => console.log(error));
db.once("open", () => console.log("Conectado no banco de dados"));

app.get("/", (req, res) => {
    res.send("SALVE");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em: http://localhost:${PORT}`);
});