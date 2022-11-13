import express from "express";
import * as ReceiptDetailsController from "../controllers/ReceiptDetailsController.js";

const ReceiptDetailsRouter = express.Router();

//==================Get==================
ReceiptDetailsRouter.get(
  "/receipts/getReceiptDetailsByReceiptId/:_id",
  ReceiptDetailsController.getReceiptDetailsByReceiptId
);
//==================Post==================

//==================Put==================

//==================Delete==================

export default ReceiptDetailsRouter;
