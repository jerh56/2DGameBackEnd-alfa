import { Router } from "express";
import cUsuario from "../controllers/usuario.controllers.js";

const rUsuario = Router();

// Routes
rUsuario.post("/usuario/signup", cUsuario.signUp);

rUsuario.post("/usuario/signin",cUsuario.signIn);


export default rUsuario;
