import mongoose from "mongoose";

const schema = new mongoose.Schema({
  SupplierId: {
    type: Number,
    required: true,
  },
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
