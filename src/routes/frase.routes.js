import { Router } from "express";
import cFrase from "../controllers/frase.controller.js";
import  token  from "../helpers/token.js";

const rFrase = Router();

rFrase.post('/frase/guardar',token.valido,cFrase.fncFraseGuardar);
rFrase.get('/frase/listar',token.valido,cFrase.fncFraseListar);


export default rFrase;