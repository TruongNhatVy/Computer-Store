import { ProductModel } from "../models/ProductModel.js";

export const getAllProducts = async () => {
  return await ProductModel.find();
};

export const getProductById = async (productId) => {
  return await ProductModel.findOne({ ProductId: productId });
};

export const addProduct = async (product) => {
  return await ProductModel.create(product);
};

export const updateProductById = async (productId, product) => {
  await ProductModel.findOneAndUpdate({ ProductId: productId }, product);
};

export const deleteProductById = async (productId) => {
  await ProductModel.findOneAndDelete({ ProductId: productId });
};
