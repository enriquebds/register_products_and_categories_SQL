import { Router } from "express";
import createProductController from "../controllers/products/createProducts.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";

const routes = Router();

routes.get("/products", listAllProductsController);
routes.post("/products", createProductController);

export default routes;
