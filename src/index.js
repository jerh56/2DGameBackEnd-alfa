const express = require("express");
const cors = require('cors');

const helmet = require("helmet");
const mongoose = require('./mongodb.js');

// App config
const app = express();

app.set('port', process.env.PORT || 3000);

/*
const redis = require('redis');
const configClient={
    host: 'redis-13497.c281.us-east-1-2.ec2.cloud.redislabs.com',
    port: 13497,
    pass: ''
};
*/

// Middlewares
app.use(cors());
app.use(helmet());

// Database
const list = ["LA AMENAZA FANTASMA", "LA AMENAZA DE DANIEL", "EL FANTASMA DE LA OPERA", "BROKEBACK MOUNTAIN",
    "EL PADRINO",
    "MAD MAX FURIA EN LA CARRETERA",
    "VOLVER AL FUTURO"];


// Endpoints
app.get("/", (req, res) => {
    res.send("2D Video Game");
});

app.get("/phrase", (req, res) => {
    res.json({
        phrase: list[Math.floor(Math.random() * list.length)],
        type: "Movie",
        tries: 5
    })
});

app.get("/test-phrase", (req, res) => {
    let phrase = list[Math.floor(Math.random() * list.length)];
    res.send(phrase);
});

//Conectamos DB
async function main() {
    await mongoose.conexionDB();
}
main();

// Start server
app.listen(app.get('port'), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Listening at http://localhost:${app.get('port')}`);
    }
});

//Creamos cliente de redis
//const client = redis.createClient(configClient);

//(async () => {
//    await client.connect();
//})();

//client.on('connect', () => console.log('Redis Client Connected'));
//client.on('error', (err) => console.log('Redis Client Connection Error', err));