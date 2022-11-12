import { OrderModel } from "../models/data/OrderModel.js";


export const getOrderByAccountId = async (_id) => {
  return await OrderModel.find({AccountId: _id});
};
