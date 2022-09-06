import { Router } from "express";
import cActor from "../controllers/actor.controller.js";
import  token  from "../helpers/token.js";

const rActor = Router();

rActor.get('/actor/listar',token.valido, cActor.fncActoresListar);


export default rActor;