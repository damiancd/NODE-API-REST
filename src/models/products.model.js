// import fs from "fs";
// import path from "path";

// const __dirname = import.meta.dirname;

// const jsonPath = path.join(__dirname, "./products.json");
// const json = fs.readFileSync(jsonPath, "utf-8");
// const products = JSON.parse(json);

// // console.log(products);

// export const getAllProducts = () => {
//   return products;
// };

// export const getProductById = (id) => {
//   return products.find((item) => item.id == id);
// };

// export const createProduct = (data) => {
//   //   console.log({ ...data });

//   const newProduct = {
//     id: products.length + 1,
//     ...data,
//   };

//   products.push(newProduct);

//   fs.writeFileSync(jsonPath, JSON.stringify(products));

//   return newProduct;
// };

// export const deleteProduct = (id) => {
//   const productIndex = products.findIndex((p) => p.id === id);

//   if (productIndex == -1) {
//     return null;
//   } else {
//     const product = products.splice(productIndex, 1);

//     fs.writeFileSync(jsonPath, JSON.stringify(products));

//     return product;
//   }
// };


// products.model.js
import { db } from '../data/data.js';
import {
collection,
getDocs,
getDoc,
addDoc,
deleteDoc,
doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');
// Método para buscar un producto por su ID

export async function getProductById(id) {
const productDoc = await getDoc(doc(productsCollection, id));
if (productDoc.exists()) {
return productDoc.data();
} else {
return null;
}
};
// Método para obtener todos los productos
export async function getAllProducts() {
const querySnapshot = await getDocs(productsCollection);
const products = [];
querySnapshot.forEach((doc) => {
products.push({ id: doc.id, ...doc.data() });
});
console.log(products)
return products;
};
// Método para guardar un producto en Firestore
export async function saveProduct(product) {
await addDoc(productsCollection, product);
};
// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
await deleteDoc(doc(productsCollection, id));
}