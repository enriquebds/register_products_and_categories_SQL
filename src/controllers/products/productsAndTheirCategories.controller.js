import productsAndTheirCategories from "../../services/products/productsAndTheirCategories";

const productsAndTheirCategoriesController = async (req, res) => {
  const { id } = req.params;

  try {
    const productByCategory = await productsAndTheirCategories(id);

    return res.status(200).json(productByCategory);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default productsAndTheirCategoriesController;
