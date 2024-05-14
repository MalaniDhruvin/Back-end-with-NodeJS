const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hola chan");
})
app.get("/login", (req, res) => {
    res.send("Under development");
})

app.listen(3000);