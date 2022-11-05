import express from "express";
import * as ProductController from "../controllers/ProductController.js";

const ProductRouter = express.Router();

//Create
ProductRouter.post("/products/addProduct", ProductController.addProduct);

//Read
ProductRouter.get("/products/getAllProducts", ProductController.getAllProducts);
ProductRouter.get(
  "/products/getProductById/:_id",
  ProductController.getProductById
);

//Update
ProductRouter.put(
  "/products/updateProduct/:_id",
  ProductController.updateProductById
);

//Delete
ProductRouter.delete(
  "/products/deleteProduct/:_id",
  ProductController.deleteProductById
);

export default ProductRouter;
