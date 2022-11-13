import { ReceiptDetailsModel } from "../models/data/ReceiptDetailsModel.js";

export const getReceiptDetailsByReceiptId = async (_id) => {
  return await ReceiptDetailsModel.find({ ReceiptId: _id });
};
