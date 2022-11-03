import mongoose from "mongoose";

const schema = new mongoose.Schema({
  OderId: {
    type: Number,
    require: true,
  },
  AccountId: {
    type: Number,
    require: true,
  },
  Date: {
    type: Date,
    require: true,
  },
  Total: {
    type: Number,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
  Province: {
    type: String,
    require: true,
  },
  District: {
    type: String,
    require: true,
  },
});

export const OrderModel = mongoose.model("orders", schema);
