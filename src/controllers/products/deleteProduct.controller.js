import deleteProduct from "../../services/products/deleteProduct";

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteProduct(id);

    return res.status(204).json(deleted);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default deleteProductController;
