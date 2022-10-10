import { Router } from "express";
import createCategorieController from "../controllers/categories.controllers/categories/createCategorie.controller";
import listAllCategoriesController from "../controllers/categories.controllers/categories/listAllCategories.controller";
import listCategoryByIdController from "../controllers/categories.controllers/categories/listCategoryById.controller";
import updateCategoryController from "../controllers/categories.controllers/categories/updateCategory.controller";
import deleteCategoryController from "../controllers/categories.controllers/categories/deleteCategory.controller";

const routes = Router();

routes.get("", listAllCategoriesController);
routes.post("", createCategorieController);
routes.get("/:id", listCategoryByIdController);
routes.patch("/:id", updateCategoryController);
routes.delete("/:id", deleteCategoryController);

export default routes;
