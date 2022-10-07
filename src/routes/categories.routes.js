import { Router } from "express";
import createCategorieController from "../controllers/categories.controllers/categories/createCategorie.controller";
import listAllCategoriesController from "../controllers/categories.controllers/categories/listAllCategories.controller";

const routes = Router();

routes.get("/categories", listAllCategoriesController);
routes.post("/categories", createCategorieController);

export default routes;
