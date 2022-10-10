import { Router } from "express";
import createProductController from "../controllers/products/createProducts.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listProductByIdController from "../controllers/products/listProductById.controller";
import productsAndTheirCategoriesController from "../controllers/products/productsAndTheirCategories.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const routes = Router();

routes.get("", listAllProductsController);
routes.get("/:id", listProductByIdController);
routes.get("/category/:id", productsAndTheirCategoriesController);
routes.post("", createProductController);
routes.patch("/:id", updateProductController);
routes.delete("/:id", deleteProductController);

export default routes;
