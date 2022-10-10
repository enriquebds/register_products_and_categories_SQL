import updateProduct from "../../services/products/updateProduct";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedProduct = await updateProduct(id, data);

    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
