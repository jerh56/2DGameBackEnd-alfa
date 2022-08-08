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
    const list = ["LA AMENAZA FANTASMA","LA AMENAZA DE DANIEL","EL FANTASMA DE LA OPERA", "BROKEBACK MOUNTAIN",
    "EL PADRINO",
    "MAD MAX FURIA EN LA CARRETERA", 
    "VOLVER AL FUTURO"];
    let phrase = list[Math.floor(Math.random() * list.length)]; 
    response.send(phrase);
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port:${app.get('port')}`);
});