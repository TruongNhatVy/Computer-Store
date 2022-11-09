import express from "express";
import * as ProductController from "../controllers/ProductController.js";

const ProductRouter = express.Router();

//Create
ProductRouter.post("/products/addProduct", ProductController.addProduct);

//Read
ProductRouter.get("/products/getProducts", ProductController.getProducts);
ProductRouter.get("/products/getProducts/:page", ProductController.getProducts);
ProductRouter.get(
  "/products/getProductById/:_id",
  ProductController.getProductById
);

//Update
ProductRouter.put(
  "/products/updateProduct/:_id",
  ProductController.updateProduct
);

//Delete
ProductRouter.delete(
  "/products/deleteProduct/:_id",
  ProductController.deleteProduct
);

export default ProductRouter;
