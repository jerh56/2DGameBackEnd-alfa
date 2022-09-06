import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const cat_usuarios = new mongoose.Schema(
  {
    name: { 
      type: String, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true,
      unique: true, 
      trim: true 
    },
    password: {
       type: String, 
       required: true 
      },
    date: {
       type: Date,
       default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

cat_usuarios.methods.encryptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

cat_usuarios.methods.compararPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("cat_usuarios", cat_usuarios);
