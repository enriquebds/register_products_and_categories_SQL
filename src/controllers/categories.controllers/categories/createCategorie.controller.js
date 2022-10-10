import createCategorie from "../../../services/categories/createCategorie";

const createCategorieController = async (req, res) => {
  const category = req.validatedBody;

  try {
    const createdCategory = await createCategorie(category);
    return res.status(201).json({
      message: "Category created",
      category: createdCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createCategorieController;
