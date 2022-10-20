import { ProductModel } from "../models/ProductModel.js";

export const getAllProductsRe = async (req, res) => {
  const allProducts = await ProductModel.find();

  return allProducts;
};

export const addProductRe = async (req, res) => {
  const product = new ProductModel(req); //res is newProduct (body)

  await product.save();
};

export const updateProductRe = async (req, res) => {

};
