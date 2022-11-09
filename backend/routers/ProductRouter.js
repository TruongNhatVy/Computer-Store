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
ProductRouter.get(
  "/products/getProductByStatus/:status",
  ProductController.getProductByStatus
);
ProductRouter.get(
  "/products/getProductByStatus/:status/:page",
  ProductController.getProductByStatus
);
ProductRouter.get(
  "/products/getProductByName/:name",
  ProductController.getProductByName
);
ProductRouter.get(
  "/products/getProductByName/:name/:page",
  ProductController.getProductByName
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
