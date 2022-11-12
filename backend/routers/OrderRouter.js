import express from "express";
import * as OrderController from "../controllers/OrderController.js";

const OrderRouter = express.Router();

//==================Get==================
OrderRouter.get(
  "/orders/getOrderByAccountId/:_id",
  OrderController.getOrderByAccountId
);
//==================Post==================

//==================Put==================

//==================Delete==================


export default OrderRouter;