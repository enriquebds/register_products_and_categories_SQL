import express from "express";
import "dotenv/config";
import productsAndCategoriesRoutes from "./routes/productsAndCategories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());
app.use(productsAndCategoriesRoutes);

export default app.listen(3333, () => {
  startDatabase();
});
