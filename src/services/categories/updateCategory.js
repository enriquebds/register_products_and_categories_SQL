import database from "../../database";

const updateCategory = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (res.rowCount === 0) {
      throw new Error("Category not found");
    }

    return { message: "Updated", category: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategory;
