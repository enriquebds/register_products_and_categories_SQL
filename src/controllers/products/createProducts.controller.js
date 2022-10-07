import createProduct from "../../services/products/createProducts";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const product = await createProduct(name, price, category_id);

    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createProductController;
