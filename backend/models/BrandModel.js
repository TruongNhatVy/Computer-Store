import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.schema({
  Name: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
});

export const BrandModel = mongoose.model("brands", schema);
