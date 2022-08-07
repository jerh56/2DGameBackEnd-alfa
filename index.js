const express = require("express");
const app = express();
const port = 8000;

app.set('port', process.env.PORT || 3000);

app.get("/", (request, response) => {
    response.send("2D Video Game");
});

app.get("/phrase", (request, response) => {
    response.send("Star Wars Una nueva esperanza");
});

app.get("/test-phrase", (request, response) => {
    response.send("LA AMENAZA FANTASMA");
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port:${app.get('port')}`);
});