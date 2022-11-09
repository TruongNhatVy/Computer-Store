import * as ProductSvc from "../services/ProductSvc.js";

export const getProducts = async (req, res) => {
  try {
    const { page } = req.params;
    const products = await ProductSvc.getProducts(page);

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { _id } = req.params;

    const product = await ProductSvc.getProductById(_id);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getProductByStatus = async (req, res) => {
  try {
    const { status,page } = req.params;

    const products = await ProductSvc.getProductByStatus(status,page);
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getProductByName = async (req, res) => {
  try {
    const { name, page } = req.params;

    const products = await ProductSvc.getProductByName(name, page);
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await ProductSvc.addProduct(product);

    return res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = req.body;

    await ProductSvc.updateProduct(_id, product);

    const productUpdate = await ProductSvc.getProductById(_id);

    return res.status(200).json(productUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;

    await ProductSvc.deleteProduct(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
