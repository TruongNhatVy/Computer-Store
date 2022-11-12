import { OrderModel } from "../models/data/OrderModel.js";

export const getFiltersOrder = async (query, skipProducts, PAGE_SIZE) => {
  console.log(query);

  if (skipProducts >= 0) {
    return await OrderModel.find(query).skip(skipProducts).limit(PAGE_SIZE);
  }

  return await OrderModel.find(query);
};

export const getOrderByAccountId = async (_id) => {
  return await OrderModel.find({ AccountId: _id });
};

export const getOrderById = async (_id) => {
  return await OrderModel.findById(_id);
};

export const updateOrder = async (_id, order) => {
  return await OrderModel.findByIdAndUpdate(_id, order);
};
