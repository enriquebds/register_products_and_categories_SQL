import listCategoryById from "../../../services/categories/listCategoryById";

const listCategoryByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await listCategoryById(id);

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listCategoryByIdController;
