import mUsuario from "../models/usuarios.models.js";
import token from "../helpers/token.js";



const cUsuario = {};

//crear usuario
cUsuario.singUp = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "Passwords no coincide." });
  }
  if (password.length < 4) {
    errors.push({ text: "El Passwords debe tener al menos 4 caracteres." });
  }
  if (errors.length > 0) {
    return res.send({
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  }
  // Buscamos si el correo ya existe
  const usuarioBuscar = await mUsuario.findOne({ email: email });
  if (usuarioBuscar) {
    const errorMsj = {
      "error": "El correo electrónico ya está en uso."
    }
    return res.send(errorMsj);
  }
  // Guardamos el nuevo usuario
  const usuarioNuevo = new mUsuario({ name, email, password });
  usuarioNuevo.password = await usuarioNuevo.encryptarPassword(password);
  await usuarioNuevo.save();
  const result = {
    "mensaje": "Usuario Guardar exitosamente."
  }
  res.send(result);
};


//Crear Token
cUsuario.signIn = async (req, res) => {
  // Buscamos si el usuario existe
  const { email, password } = req.body;
  const usuarioBuscar = await mUsuario.findOne({ email });
  if (usuarioBuscar != null) {
    const compararPass = await usuarioBuscar.compararPassword(password);
    if (!compararPass) {
      res.status(401).json({ error: 'Email o  Password incorrecto' });
    }
    return await token.generar(req, res);
  }
  res.status(401).json({ error: 'Email o  Password incorrecto' });

}

export default cUsuario;
