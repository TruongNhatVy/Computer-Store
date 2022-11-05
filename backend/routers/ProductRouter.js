import express from "express";
import * as ProductController from "../controllers/ProductController.js";

const ProductRouter = express.Router();

//Create
ProductRouter.post("/products/addProduct", ProductController.addProduct);

//Read
ProductRouter.get("/products/getAllProducts", ProductController.getAllProducts);
ProductRouter.get(
  "/products/getProductById/:productId",
  ProductController.getProductById
);

//Update
ProductRouter.put(
  "/products/updateProduct/:productId",
  ProductController.updateProductById
);

//Delete
ProductRouter.delete(
  "/products/deleteProduct/:productId",
  ProductController.deleteProductById
);

export default ProductRouter;
