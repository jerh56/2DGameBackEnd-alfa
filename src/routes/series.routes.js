import { Router } from "express";
import cSeries from "../controllers/series.controller.js"

const rSeries = Router();

rSeries.get('/series/listar',cSeries.fncSerieListar);

export default rSeries;