import deleteProduct from "../../services/products/deleteProduct";

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);

    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProductController;
