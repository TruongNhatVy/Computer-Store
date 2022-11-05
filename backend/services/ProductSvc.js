import * as ProductRepo from "../repositories/ProductRe.js";

export const getAllProducts = async () => {
  return await ProductRepo.getAllProducts();
};

export const getProductById = async (_id) => {
  return await ProductRepo.getProductById(_id);
};

export const addProduct = async (product) => {
  return await ProductRepo.addProduct(product);
};

export const updateProductById = async (_id, product) => {
  await ProductRepo.updateProductById(_id, product);

  return getProductById(_id);
};

export const deleteProductById = async (_id) => {
  await ProductRepo.deleteProductById(_id);
};
