import deleteCategory from "../../../services/categories/deleteCategory";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCategory(id);

    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategoryController;
