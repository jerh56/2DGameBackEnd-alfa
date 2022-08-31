import mongoose from "mongoose";

const cat_series_tv = new mongoose.Schema(
  {
    id: {
      type: Number,
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

export default mongoose.model("cat_series_tv", cat_series_tv);
