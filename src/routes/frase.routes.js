import { Router } from "express";

import cFrase from "../controllers/frase.controller.js";

const rFrase = Router();

rFrase.post('/frase/guardar',cFrase.fncFraseGuardar);
rFrase.get('/frase/listar',cFrase.fncFraseListar);


export default rFrase;