import { addProductRe, getAllProductsRe } from "../repositories/ProductRe.js";

export const getAllProductsSvc = async (req, res) => {
  const product = await getAllProductsRe(req, res);

  try {
    return res.status(200).json({
      message: "ok",
      length: product.length,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "fail",
      error: error,
    });
  }
};

export const addProductSvc = async (req, res) => {
  const newProduct = req.body;
  await addProductRe(newProduct, res);

  try {
    return res.status(200).json({
      message: "ok",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "fail",
      error: error,
    });
  }
};
