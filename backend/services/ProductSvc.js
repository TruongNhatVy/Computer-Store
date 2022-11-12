import * as ProductRepo from "../repositories/ProductRepo.js";
import { ProductFiltersModel } from "../models/filters/ProductFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersProduct = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["Name"];
  const ignoreCases = ["Status"];
  const productFilters = new ProductFiltersModel(filters);
  const query = {};
  let skipProducts = -1;

  Utils.addQueryNearlyRight(query, nearlyRight, productFilters);
  Utils.addQueryIgnoreCase(query, ignoreCases, productFilters);
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), productFilters);

  query["Price"] = {
    $gte: query["PriceStart"],
    $lte: query["PriceEnd"],
  };

  delete query["PriceStart"];
  delete query["PriceEnd"];

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipProducts = (filters.page - 1) * PAGE_SIZE;
  }

  return await ProductRepo.getFiltersProduct(query, skipProducts, PAGE_SIZE);
};

export const getProductById = async (_id) => {
  return await ProductRepo.getProductById(_id);
};

export const getProductByOffsetLimit = async (offset, limit) => {
  offset = Number(offset);
  limit = Number(limit);

  return await ProductRepo.getProductByOffsetLimit(offset - 1, limit + 1);
};

export const addProduct = async (product) => {
  return await ProductRepo.addProduct(product);
};

export const updateProduct = async (_id, product) => {
  await ProductRepo.updateProduct(_id, product);

  return getProductById(_id);
};

export const deleteProduct = async (_id) => {
  await ProductRepo.deleteProduct(_id);
};
