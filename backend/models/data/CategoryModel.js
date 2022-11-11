import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
  },
});

export const CategoryModel = mongoose.model("categorys", schema);
