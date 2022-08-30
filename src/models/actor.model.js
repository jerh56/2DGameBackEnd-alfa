import mongoose from "mongoose";

const cat_actores = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profile_path: {
      type: String,
      required: true,
    },
    movies: [
      {
        type: String,
        required: false,
      },
    ],
    page: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cat_actores", cat_actores);
