import { Router } from "express";
import createCategorieController from "../controllers/categories.controllers/categories/createCategorie.controller";
import listAllCategoriesController from "../controllers/categories.controllers/categories/listAllCategories.controller";
import listCategoryByIdController from "../controllers/categories.controllers/categories/listCategoryById.controller";

const routes = Router();

routes.get("", listAllCategoriesController);
routes.post("", createCategorieController);
routes.get("/:id", listCategoryByIdController);

export default routes;
