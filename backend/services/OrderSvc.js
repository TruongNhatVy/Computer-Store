import * as OrderRepo from "../repositories/OrderRepo.js";

export const getOrderByAccountId = async (_id) => {
  return await OrderRepo.getOrderByAccountId(_id);
};
