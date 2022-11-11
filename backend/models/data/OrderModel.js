import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema({
  AccountId: {
    type: Schema.Types.ObjectId,
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
    type: String,
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
