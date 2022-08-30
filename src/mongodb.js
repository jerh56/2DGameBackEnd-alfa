const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://gameuser:sSV8nv5lFdzOleNg@firstcluster.4rc4s.mongodb.net/gamedb?retryWrites=true&w=majority";

const conexionDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true },
    ()=> console.log("MongoDB Atlas DataBase conectado...."));
  } catch (error) {
    console.error(error);
  }
};


module.exports = {conexionDB};