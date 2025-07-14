import { Router } from "express";

const router = Router();

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

router.post("/products/create", createProduct);

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
