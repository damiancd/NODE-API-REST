import { Router } from "express";

const router = Router();

// const products = [
//   { id: 1, name: "Camiseta Deportiva", price: 150 },
//   { id: 2, name: "Zapatos Running", price: 1200 },
//   { id: 3, name: "Mochila Escolar", price: 350 },
//   { id: 4, name: "Auriculares Bluetooth", price: 800 },
//   { id: 5, name: "Botella Térmica", price: 220 },
// ];

import {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  patchProduct,
} from "../controllers/products.controller.js";

router.get("/products", getAllProducts);
router.get("/products/search", searchProduct);
router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.put('/products/:id', updateProduct);

router.patch('/products/:id', patchProduct);


router.delete("/products/:id", deleteProduct);

// router.put("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id, 10);
//   const productIndex = products.findIndex((p) => p.id === productId);

//   if (productIndex === -1) {
//     return res.status(404).json({ error: "Producto no encontrado" });
//   }

//   const { name, categories, description, price } = req.body;

//   products[productIndex] = { id: productId, name, categories, description, price };
//   res.json(products[productIndex]);
// });


export default router;
