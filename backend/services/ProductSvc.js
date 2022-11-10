import * as ProductRepo from "../repositories/ProductRepo.js";
import * as Utils from "../utils/Utils.js";

export const getFiltersProduct = async (filters) => {
  Utils.cleanObject(filters);

  return await ProductRepo.getFiltersProduct(filters);
};

export const getProductById = async (_id) => {
  return await ProductRepo.getProductById(_id);
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
