import express from "express";
import {getAllProductsSvc, addProductSvc} from "../services/ProductSvc.js";

const ProductRouter = express.Router();

ProductRouter.get("/getAllProducts", getAllProductsSvc);
ProductRouter.post("/addProduct", addProductSvc);

export default ProductRouter;
