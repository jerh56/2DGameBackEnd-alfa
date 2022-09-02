import express  from "express";
import cors  from'cors';
import helmet  from"helmet";
import cnnDB  from './mongodb.js';
import {PORT} from "./config.js";
import  token  from "./helpers/token.js";
import rPeliculas from "./routes/peliculas.routes.js"
import rSeries from "./routes/series.routes.js"
import rActores from "./routes/actores.routes.js"
import rFrase from "./routes/frase.routes.js";
import rUsuario from "./routes/usuario.routes.js";



// App config
const app = express();
app.set('port', PORT);

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Database
const list = ["LA AMENAZA FANTASMA", "LA AMENAZA DE DANIEL", "EL FANTASMA DE LA OPERA", "BROKEBACK MOUNTAIN",
    "EL PADRINO",
    "MAD MAX FURIA EN LA CARRETERA",
    "VOLVER AL FUTURO"];


// Endpoints
app.get("/", token.valido, (req, res) => {
    res.send("2D Video Game");
});

app.get("/phrase",token.valido, (req, res) => {
    res.json({
        phrase: list[Math.floor(Math.random() * list.length)],
        type: "Movie",
        tries: 5
    })
});

app.get("/test-phrase",token.valido, (req, res) => {
    let phrase = list[Math.floor(Math.random() * list.length)];
    res.send(phrase);
});

//Conectamos DB
async function main() {
    await cnnDB.mongoose();
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

//routes
app.use(rPeliculas);
app.use(rSeries);
app.use(rActores);
app.use(rFrase);
app.use(rUsuario);

//Creamos cliente de redis
//const client = redis.createClient(configClient);

//(async () => {
//    await client.connect();
//})();

//client.on('connect', () => console.log('Redis Client Connected'));
//client.on('error', (err) => console.log('Redis Client Connection Error', err));