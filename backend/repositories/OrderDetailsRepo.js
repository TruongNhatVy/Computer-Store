import { OrderDetailsModel } from "../models/data/OrderDetailsModel.js";

export const getOrderDetailsByOrderId = async (_id) => {
  return await OrderDetailsModel.find({ OrderId: _id });
};
