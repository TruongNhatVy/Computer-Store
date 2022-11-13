import { ReceiptModel } from "../models/data/ReceiptModel.js";

export const getFiltersReceipt = async (query, skipReceipts, PAGE_SIZE) => {
  if (skipReceipts >= 0) {
    return await ReceiptModel.find(query).skip(skipReceipts).limit(PAGE_SIZE);
  }

  return await ReceiptModel.find(query);
};

export const getReceiptById = async (_id) => {
  return await ReceiptModel.findById(_id);
};

export const addReceipt = async (Receipt) => {
  return await ReceiptModel.create(Receipt);
};
