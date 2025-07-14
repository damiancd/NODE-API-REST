import { db } from "./data.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  setDoc,
  updateDoc
  } from "firebase/firestore";

const productsCollection = collection(db, "products");

// GET All Products
export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

// GET Products by ID
export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};

//POST

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

// PUT
export async function updateProduct(id, productData) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    
    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData); // reemplazo completo
    return { id, ...productData };
  } catch (error) {
    console.error(error);
  }
};

//PATCH

export async function patchProduct(id, partialData) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false; // no encontrado
    }

    await updateDoc(productRef, partialData); // solo actualiza campos enviados
    return { id, ...partialData };
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

//DELETE

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
  };