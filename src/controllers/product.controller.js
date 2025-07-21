import serviceProduct from "../services/product.service.js";
import { validateProductData } from "../utils/validator.js";

const getProducts = async (req, res) => {
    try {
        const products = await serviceProduct.getAll();
        res.status(200).json({message: "Lista de productos", payload: products});

    } catch (error) {
        res.status(500).json({message:"Error interno del servidor al obtener lista de productos", error: error.message})
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
        res.status(500).json({ message: "Error interno del servidor al obtener producto", error: error.message });    
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productRef = await serviceProduct.removeById(id);
        if (!productRef){
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({message: "Producto eliminado correctamente"});
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor al eliminar producto", error: error.message });    
    }
}

const createProduct = async (req, res) => {
    const validator = validateProductData(req.body);
    if (!validator.valid){
        return res.status(400).json({ message: validator.message });
    }

    try {
        const newProduct = req.body;
        const created = await serviceProduct.createProduct(newProduct);
        res.status(201).json({message: "Producto creado exitosamente", payload: created});
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor al crear producto", error: error.message });    
    }    
}

const updateProduct = async (req, res) => {
    const validator = validateProductData(req.body);
    if (!validator.valid){
        return res.status(400).json({ message: validator.message });
    }
    try {
        const { id } = req.params;    
        const productToUpdate = req.body;

        const updated = await serviceProduct.updateProduct(id, productToUpdate);
        if (!updated){
            return res.status(404).json({ message: "Producto no encontrado" });            
        }
        res.status(200).json({message: "Producto actualizado exitosamente", payload: updated})
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor al actualizar producto", error: error.message });            
    }
}

export default { getProducts, getProductById, deleteProduct, createProduct, updateProduct }