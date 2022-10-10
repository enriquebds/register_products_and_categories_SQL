import database from "../../database";

const productsAndTheirCategories = async (id) => {
  try {
    const res = await database.query(
      `SELECT
            products.name as name,
            products.price as price,
            categories.name as category
        FROM
            products
        JOIN
            categories ON categories.id = $1
        `,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("category/product not found");
    }

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default productsAndTheirCategories;
