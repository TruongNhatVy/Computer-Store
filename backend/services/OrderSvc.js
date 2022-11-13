import * as OrderRepo from "../repositories/OrderRepo.js";
import * as Utils from "../utils/Utils.js";
import { OrderFiltersModel } from "../models/filters/OrderFiltersModel.js";

const PAGE_SIZE = 10;

export const getFiltersOrder = async (filters) => {
  Utils.cleanObject(filters);

  //const nearlyRight = [];
  const ignoreCases = ["Status"];
  const productFilters = new OrderFiltersModel(filters);
  const query = {};
  let skipProducts = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    productFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    productFilters,
    Utils.regexExactly(),
    "iu"
  );
  //Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), productFilters);

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipProducts = (filters.page - 1) * PAGE_SIZE;
  }

  return await OrderRepo.getFiltersOrder(query, skipProducts, PAGE_SIZE);
};

export const getOrderByAccountId = async (_id) => {
  return await OrderRepo.getOrderByAccountId(_id);
};

export const getOrderById = async (_id) => {
  return await OrderRepo.getOrderById(_id);
};

export const updateOrder = async (_id, order) => {
  return await OrderRepo.updateOrder(_id, order);
  //return getOrderById(_id);
};
