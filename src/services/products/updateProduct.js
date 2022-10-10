import database from "../../database";

const updateProduct = async (id, name, price, category_id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [name, price, category_id, id]
    );

    if (res.rowCount === 0) {
      throw new Error("Product not found");
    }

    return { message: "Product Updated", product: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProduct;
