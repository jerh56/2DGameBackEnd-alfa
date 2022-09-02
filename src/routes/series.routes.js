import { Router } from "express";
import cSeries from "../controllers/series.controller.js"
import  token  from "../helpers/token.js";


const rSeries = Router();

rSeries.get('/series/listar',token.valido, cSeries.fncSerieListar);

export default rSeries;