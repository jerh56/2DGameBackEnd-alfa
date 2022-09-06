import  Router  from "express";
import cPelicula from "../controllers/peliculas.controller.js"
import  token  from "../helpers/token.js";


const rPeliculas = Router();

rPeliculas.get('/peliculas/listar',token.valido,cPelicula.fncPeliculaListar);


export default rPeliculas;