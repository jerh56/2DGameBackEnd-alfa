const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("2D Video Game");
});

app.get("/phrase", (request, response) => {
    response.send("Star Wars Una nueva esperanza");
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});