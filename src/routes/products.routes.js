import { Router } from "express";
import createProductController from "../controllers/products/createProducts.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";

const routes = Router();

routes.get("", listAllProductsController);
routes.post("", createProductController);

export default routes;
