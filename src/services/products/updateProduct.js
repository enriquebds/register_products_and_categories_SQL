import database from "../../database";

const updateProduct = async (id, data) => {
  try {
    let query = "UPDATE products SET ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);
    query += `WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rowCount === 0) {
      throw new Error(error);
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProduct;
