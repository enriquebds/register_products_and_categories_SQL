import { Router } from "express";
import createCategorieController from "../controllers/createCategorie.controller";
import listAllCategoriesController from "../controllers/listAllCategories.controller";

const routes = Router();

routes.get("/categories", listAllCategoriesController);
routes.post("/categories", createCategorieController);

export default routes;
