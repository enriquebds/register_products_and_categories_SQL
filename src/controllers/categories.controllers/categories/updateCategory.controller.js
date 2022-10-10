import updateCategory from "../../../services/categories/updateCategory";

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await updateCategory(id, name);

    return res.status(200).json(updatedCategory);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default updateCategoryController;
