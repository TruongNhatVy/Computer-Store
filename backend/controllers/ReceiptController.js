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

export const updateReceipt = async (req, res) => {
  try {
    const { _id } = req.params;
    const receipt = req.body;

    await ReceiptSvc.updateReceipt(_id, receipt);

    const receiptUpdate = await ReceiptSvc.getReceiptById(_id);

    return res.status(200).json(receiptUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteReceipt = async (req, res) => {
  try {
    const { _id } = req.params;

    await ReceiptSvc.deleteReceipt(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const warehouseReceived = async (req, res) => {
  try {
    await ReceiptSvc.warehouseReceived(req);

    return res.status(200).json({ Message: "ok" });
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
