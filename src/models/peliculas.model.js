import mongoose from "mongoose";

const cat_peliculas = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    adult: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    media_type: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    lenguague: {
        type: String,
        required: true
      },
    page:{
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cat_peliculas", cat_peliculas);
