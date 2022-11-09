import { ProductModel } from "../models/ProductModel.js";

const PAGE_SIZE = 10;

export const getProducts = async (page) => {
  if (page) {
    page = parseInt(page);
    page = page < 1 ? 1 : page;

    const skipProducts = (page - 1) * PAGE_SIZE;

    return await ProductModel.find().skip(skipProducts).limit(PAGE_SIZE);
  } else {
    return await ProductModel.find();
  }
};

export const getProductById = async (_id) => {
  return await ProductModel.findById(_id);
};

export const addProduct = async (product) => {
  return await ProductModel.create(product);
};

export const updateProduct = async (_id, product) => {
  await ProductModel.findByIdAndUpdate(_id, product);
};

export const deleteProduct = async (_id) => {
  await ProductModel.findByIdAndDelete(_id);
};
