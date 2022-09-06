import jwt from "jsonwebtoken";
import { SECRETJWT, EXPIRESINTJWT } from "../config.js";

//Verificar Token valido
// Authorization: Bearer <token>
const token = {};
token.valido = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    jwt.verify(req.token, SECRETJWT, (error, authData) => {
      if (error) {
        res.sendStatus(401);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
}


//Generar token
token.generar = async (req, res, next) => {
  const usuario = {
    "email": req.body.email,
  }
  jwt.sign({ usuario }, SECRETJWT, { expiresIn: EXPIRESINTJWT }, (_err, token) => {
    res.header('Authorization', token).json({
      error: null,
      data: { token }
    })
  });
}

export default token;