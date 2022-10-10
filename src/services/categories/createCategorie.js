import database from "../../database";
import { createCategory } from "../../serializers/categories.serializer";

const createCategorie = async (category) => {
  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [category.name]
    );
    return createCategory.validate(res.rows[0], {
      stripUnknown: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategorie;
