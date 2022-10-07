import { Router } from "express";
import createProductController from "../controllers/products/createProducts.controller";

const routes = Router();

routes.post("/products", createProductController);

export default routes;
