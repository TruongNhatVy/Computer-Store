import express from "express";
import { getAllProductsSvc, addProductSvc } from "../services/ProductSvc.js";

const ProductRouter = express.Router();

ProductRouter.get("/products/getAllProducts", getAllProductsSvc);
ProductRouter.post("/products/addProduct", addProductSvc);

export default ProductRouter;
