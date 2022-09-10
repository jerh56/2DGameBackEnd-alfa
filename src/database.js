import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
const cnnDB={};
cnnDB.mongoose = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true});
    console.log("MongoDB Atlas DataBase conectado....");
  } catch (error) {
    console.error(error);
  }
};

export default cnnDB;
