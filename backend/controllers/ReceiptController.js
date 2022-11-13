import * as ReceiptSvc from "../services/ReceiptSvc.js";

export const getFiltersReceipt = async (req, res) => {
  try {
    const receipts = await ReceiptSvc.getFiltersReceipt(req.query);

    return res.status(200).json(receipts);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getReceiptById = async (req, res) => {
  try {
    const receipt = await ReceiptSvc.getReceiptById(req.params);
    return res.status(200).json(receipt);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addReceipt = async (req, res) => {
  try {
    const receipt = req.body;
    const newReceipt = await ReceiptSvc.addReceipt(receipt);

    return res.status(200).json(newReceipt);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
