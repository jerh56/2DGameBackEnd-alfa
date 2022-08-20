const express = require("express");
const app = express();
const port = 8000;
const helmet = require("helmet");

// CORS enabled
app.use(function(req, res, next) {
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
   });

app.use(helmet());

const list = ["LA AMENAZA FANTASMA","LA AMENAZA DE DANIEL","EL FANTASMA DE LA OPERA", "BROKEBACK MOUNTAIN",
"EL PADRINO",
"MAD MAX FURIA EN LA CARRETERA", 
"VOLVER AL FUTURO"];

app.set('port', process.env.PORT || 3000);

app.get("/", (request, response) => {
    response.send("2D Video Game");
});

app.get("/phrase", (req, res) => {
    res.json({
        phrase: list[Math.floor(Math.random() * list.length)],
        type: "Movie"
    })
});

app.get("/test-phrase", (request, response) => {
    let phrase = list[Math.floor(Math.random() * list.length)]; 
    response.send(phrase);
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port:${app.get('port')}`);
});
