import * as ProductRepo from "../repositories/ProductRepo.js";

export const getProducts = async (page) => {
  return await ProductRepo.getProducts(page);
};

export const getProductById = async (_id) => {
  return await ProductRepo.getProductById(_id);
};

export const getProductByStatus = async (status,page) => {
  return await ProductRepo.getProductByStatus(status,page);
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
