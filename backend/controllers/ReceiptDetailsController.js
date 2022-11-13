import * as ReceiptDetailsSvc from "../services/ReceiptDetailsSvc.js";

export const getReceiptDetailsByReceiptId = async (req, res) => {
  try {
    const receiptDetails = await ReceiptDetailsSvc.getReceiptDetailsByReceiptId(
      req.params
    );
    return res.status(200).json(receiptDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
