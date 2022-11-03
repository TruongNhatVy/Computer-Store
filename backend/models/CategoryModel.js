import mongoose from "mongoose";

const schema = new mongoose.Schema({
  CategoryId: {
    type: Number,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
  },
});

export const CategoryModel = mongoose.model("categorys", schema);
