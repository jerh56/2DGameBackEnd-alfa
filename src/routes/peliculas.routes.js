import  Router  from "express";
import cPelicula from "../controllers/peliculas.controller.js"

const rPeliculas = Router();

rPeliculas.get('/peliculas/listar',cPelicula.fncPeliculaListar);


export default rPeliculas;