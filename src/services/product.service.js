import { getAllProducts, getProductById, deleteProductById, createProductInDB, updateProductInDB } from "../models/product.model.js";

const getAll = async () => {
    return await getAllProducts();
}

const getById = async (id) => {
    return await getProductById(id);
}

const removeById = async (id) => {
  const exists = await getProductById(id);
  if (!exists) return null;
  await deleteProductById(id);
  return true;
}

const createProduct = async (data) => {
    return await createProductInDB(data);
}

const updateProduct = async (id, data) => {
    const exists = await getProductById(id);
    if (!exists) return null;
    return await updateProductInDB(id, data);
}

export default { getAll, getById, removeById, createProduct, updateProduct };