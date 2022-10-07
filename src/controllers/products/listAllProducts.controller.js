import listAllProducts from "../../services/products/listAllProducts";

const listAllProductsController = async (req, res) => {
  try {
    const products = await listAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listAllProductsController;
