import createCategorie from "../../../services/categories/createCategorie";

const createCategorieController = async (req, res) => {
  const { name } = req.body;

  try {
    const categorie = await createCategorie(name);

    return res.status(201).json(categorie);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createCategorieController;
