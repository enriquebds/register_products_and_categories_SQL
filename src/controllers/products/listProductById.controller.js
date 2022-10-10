import listProductById from "../../services/products/listProductById";

const listProductByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await listProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductByIdController;
