import serviceProduct from "../services/product.service.js";

const getProducts = async (req, res) => {
    try {
        const products = await serviceProduct.getAll();
        res.status(200).json({message: "Lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({message:"Error interno del servidor", error: error.message})
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await serviceProduct.getById(id);
        if (!product){
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({message: "Producto encontrado", payload: product});
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });    
    }
}

export default { getProducts, getProductById }