import { db } from "../config/db.js";
import { getDoc, addDoc, collection, doc, getDocs, updateDoc, deleteDoc, setDoc, runTransaction } from "firebase/firestore";

const productCollection = collection(db,"products");
const counterRef = doc(db, "metadata", "contador_productos");

export const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach((doc) => products.push({id: doc.id, ...doc.data()}));
        return products;
    } catch (error) {
        throw new Error("Error"+ error.message);
    }
}

export const getProductById = async (id) => {
    try {
        const prodRef = doc(productCollection,id);
        const prodSnap = await getDoc(prodRef);
        
        if (!prodSnap.exists()) return null;

        return {id: prodSnap.id, ...prodSnap.data()};
    } catch (error) {
        throw new Error("Error al obtener el producto"+ error.message);
    }
}

export const deleteProductById = async (id) => {
    try {
        const prodRef = doc(productCollection,id);
        await deleteDoc(prodRef);
    } catch (error) {
        throw new Error("Error al eliminar el producto"+ error.message);        
    }
}

export const createProductInDB = async (data) => {
    if (!data || !data.precio || !data.nombre){
        throw new Error ("Datos incompletos para poder crear un producto")
    }
  try {
    const newProduct = await runTransaction(db, async (transaction) => {
      const counterSnap = await transaction.get(counterRef);

      let nextId = 1;
      if (counterSnap.exists()) {
        const current = counterSnap.data().ultimoId || 0;
        nextId = current + 1;
      }

      transaction.set(counterRef, { ultimoId: nextId });
      const productRef = doc(productCollection, nextId.toString());
      transaction.set(productRef, data);

      return { id: nextId, ...data };
    })

    return newProduct;
  } catch (error) {
    throw new Error("Error al crear el producto: " + error.message);
  }
}

export const updateProductInDB = async (id,data) => {
    if (!data || !data.precio || !data.nombre){
        throw new Error ("Datos incompletos para poder actualizar un producto")
    }
    try {
        const productRef = doc(productCollection, id);
        const toUpdate = await updateDoc(productRef, data);
        const updatedProduct = await getDoc(productRef);
        return {id: updatedProduct.id, ...updatedProduct.data()};
    } catch (error) {
        throw new Error("Error al actualizar un producto: " + error.message);
    }
}


export default {getAllProducts, getProductById, deleteProductById, createProductInDB, updateProductInDB};