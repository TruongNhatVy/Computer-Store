import express from "express";
import * as OrderDetailsController from "../controllers/OrderDetailsController.js";

const OrderDetailsRouter = express.Router();

//==================Get==================
OrderDetailsRouter.get(
  "/orders/getOrderDetailsByOrderId/:_id",
  OrderDetailsController.getOrderDetailsByOrderId
);
//==================Post==================

//==================Put==================

//==================Delete==================

export default OrderDetailsRouter;
