import mongoose from "mongoose";

const cat_frases = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cat_frases", cat_frases);
