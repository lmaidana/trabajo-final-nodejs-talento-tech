import { getAllProducts, getProductById } from "../models/product.model.js";

const getAll = async () => {
    return await getAllProducts();
}

const getById = async (id) => {
    return await getProductById(id);
}

export default { getAll, getById };