import * as ReceiptDetailsRepo from "../repositories/ReceiptDetailsRepo.js";

export const getReceiptDetailsByReceiptId = async (_id) => {
  return await ReceiptDetailsRepo.getReceiptDetailsByReceiptId(_id);
};
