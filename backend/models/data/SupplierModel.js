import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});

export const SupplierModel = mongoose.model("suppliers", schema);
