import { Router } from "express";
import createProductController from "../controllers/products/createProducts.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listProductByIdController from "../controllers/products/listProductById.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const routes = Router();

routes.get("", listAllProductsController);
routes.post("", createProductController);
routes.get("/:id", listProductByIdController);
routes.patch("/:id", updateProductController);

export default routes;
