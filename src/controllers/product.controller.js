import serviceProduct from "../services/product.service.js";

const getProducts = async (req, res) => {
    try {
        const products = await serviceProduct.getAll();
        res.status(200).json({message: "Lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({message:"error interno del servidor", error: error.message})
    }
}

export default { getProducts }