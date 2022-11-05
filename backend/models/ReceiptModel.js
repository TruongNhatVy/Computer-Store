import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema({
  Date: {
    type: Date,
    require: true,
  },
  Total: {
    type: Number,
    require: true,
  },
});

export const Receipt = mongoose.model("receipts", schema);
