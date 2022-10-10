import deleteCategory from "../../../services/categories/deleteCategory";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteCategory(id);

    return res.status(204).json(deleted);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default deleteCategoryController;
