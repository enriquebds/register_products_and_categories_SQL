import { Router } from "express";
import createCategorieController from "../controllers/categories.controllers/categories/createCategorie.controller";
import listAllCategoriesController from "../controllers/categories.controllers/categories/listAllCategories.controller";
import listCategoryByIdController from "../controllers/categories.controllers/categories/listCategoryById.controller";
import updateCategoryController from "../controllers/categories.controllers/categories/updateCategory.controller";
import deleteCategoryController from "../controllers/categories.controllers/categories/deleteCategory.controller";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import { createCategory } from "../serializers/categories.serializer";

const routes = Router();

routes.get("", listAllCategoriesController);
routes.post(
  "",
  validateSerializerMiddleware(createCategory),
  createCategorieController
);
routes.get("/:id", listCategoryByIdController);
routes.patch("/:id", updateCategoryController);
routes.delete("/:id", deleteCategoryController);

export default routes;
