import express from "express";
import "dotenv/config";
import categoriesRoutes from "./routes/categories.routes";
import { startDatabase } from "./database";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use(categoriesRoutes);
app.use(productsRoutes);

export default app.listen(3333, () => {
  startDatabase();
});
