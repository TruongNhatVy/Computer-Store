import * as OrderDetailsRepo from "../repositories/OrderDetailsRepo.js";

export const getOrderDetailsByOrderId = async (_id) => {
  return await OrderDetailsRepo.getOrderDetailsByOrderId(_id);
};
