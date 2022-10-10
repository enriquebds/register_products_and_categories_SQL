import listProductById from "../../services/products/listProductById";

const listProductByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await listProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductByIdController;
