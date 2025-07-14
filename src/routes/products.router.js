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

export default router;
