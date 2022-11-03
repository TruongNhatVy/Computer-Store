import mongoose from "mongoose";

const schema = new mongoose.Schema({
  OrderId: {
    type: Number,
    required: true,
  },
  ProductId: {
    type: Number,
    required: true,
  },
  UnitPrice: {
    type: Number,
    require: true,
  },
  Quantity: {
    type: Number,
    require: true,
  },
  Total: {
    type: Number,
    require: true,
  },
});

export const OrderDetails = mongoose.model('orderDetails',schema);
