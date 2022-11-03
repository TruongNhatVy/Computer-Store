import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ReceiptId: {
    type: Number,
    require: true,
  },
  ProductId: {
    type: Number,
    require: true,
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

export const ReceiptDetails = mongoose.model("receiptDetails", schema);
