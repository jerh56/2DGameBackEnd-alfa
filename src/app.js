import express from "express";
import cors from 'cors';
import helmet from "helmet";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import rPeliculas from "./routes/peliculas.routes.js"
import rSeries from "./routes/series.routes.js"
import rActores from "./routes/actores.routes.js"
import rFrase from "./routes/frase.routes.js";
import rUsuario from "./routes/usuario.routes.js";

// App config
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));//Obtenemos la dirección de el proyecto
// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(rPeliculas); app.use(rSeries); app.use(rActores); app.use(rFrase); app.use(rUsuario);
//puerto
app.set('port', PORT);
//Archivos publicos 
app.use(express.static(join(__dirname, 'public')));

export default app;



