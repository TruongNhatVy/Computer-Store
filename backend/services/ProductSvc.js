import * as ProductRepo from "../repositories/ProductRe.js";

export const getAllProducts = async () => {
  return await ProductRepo.getAllProducts();
};

export const getProductById = async (productId) => {
  return await ProductRepo.getProductById(productId);
};

export const addProduct = async (product) => {
  return await ProductRepo.addProduct(product);
};

export const updateProductById = async (productId, product) => {
  await ProductRepo.updateProductById(productId, product);

  return getProductById(productId);
};

export const deleteProductById = async (productId) => {
  await ProductRepo.deleteProductById(productId);
};
