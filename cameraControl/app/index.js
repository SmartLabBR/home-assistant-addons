const express = require("express");
const app = express();

app.get("/", (_, res) => res.send("Servidor Node.js rodando como addon!"));
app.listen(3030, () => console.log("Servidor na porta 3030"));
