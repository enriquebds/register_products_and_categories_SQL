import express from "express";
import "dotenv/config";
import categoriesRoutes from "./routes/categories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());
app.use(categoriesRoutes);

export default app.listen(3333, () => {
  startDatabase();
});
