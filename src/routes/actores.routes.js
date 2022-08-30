import { Router } from "express";

import cActor from "../controllers/actor.controller.js";

const rActor = Router();

rActor.get('/actor/listar',cActor.fncActoresListar);


export default rActor;