import updateProduct from "../../services/products/updateProduct";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, price, category_id } = req.body;
  try {
    const updatedProduct = await updateProduct(id, name, price, category_id);

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
