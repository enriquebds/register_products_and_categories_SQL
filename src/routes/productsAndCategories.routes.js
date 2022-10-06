import { Router } from "express";
import listAllCategoriesController from "../controllers/listAllCategories.controller";

const routes = Router();

routes.get("/categories", listAllCategoriesController);

export default routes;
