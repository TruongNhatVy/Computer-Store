import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ReceiptId: {
    type: Number,
    required: true,
  },
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
