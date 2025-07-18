import { db } from "../config/db.js";
import { getDoc, addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const productCollection = collection(db,"productos");

export const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach((doc) => products.push({id: doc.id, ...doc.data()}));
        return products;
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

export const getProductById = async (id) => {
    try {
        const prodRef = doc(productCollection,id);
        const prodSnap = await getDoc(prodRef);
        
        if (!prodSnap.exists()) return null;

        return {id: prodSnap.id, ...prodSnap.data()};
    } catch (error) {
        throw new Error("Error al obtener el producto", error.message);
    }
}

export default {getAllProducts, getProductById};