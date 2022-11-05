import { ProductModel } from "../models/ProductModel.js";

export const getAllProducts = async () => {
  return await ProductModel.find();
};

export const getProductById = async (_id) => {
  return await ProductModel.findById(_id);
};

export const addProduct = async (product) => {
  return await ProductModel.create(product);
};

export const updateProductById = async (_id, product) => {
  await ProductModel.findByIdAndUpdate(_id, product);
};

export const deleteProductById = async (_id) => {
  await ProductModel.findByIdAndDelete(_id);
};
