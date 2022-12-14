import listAllCategories from "../../../services/categories/listAllCategories";

const listAllCategoriesController = async (req, res) => {
  try {
    const categories = await listAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listAllCategoriesController;
