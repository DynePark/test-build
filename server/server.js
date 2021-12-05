const express = require("express");
const app = express();

app.use(express.static("build"));

app.listen(3000, () => {
    console.log("server on!!!");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "./build/index.html");
});