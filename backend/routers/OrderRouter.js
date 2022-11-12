import express from "express";
import * as OrderController from "../controllers/OrderController.js";

const OrderRouter = express.Router();

//==================Get==================
OrderRouter.get("/orders/getOrderFilters", OrderController.getFiltersOrder);

OrderRouter.get(
  "/orders/getOrderByAccountId/:_id",
  OrderController.getOrderByAccountId
);

OrderRouter.get("/orders/getOrderById/:_id", OrderController.getOrderById);

//==================Post==================

//==================Put==================
OrderRouter.put("/orders/updateOrder/:_id", OrderController.updateOrder);

//==================Delete==================

export default OrderRouter;
