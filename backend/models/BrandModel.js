import mongoose from "mongoose";

const schema = new mongoose.Schema({
  BrandId: {
    type: Number,
    require: true,
  },
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
