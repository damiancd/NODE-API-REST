import * as model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  const products = await model.getAllProducts();
  // console.log(products);
  res.json(products);
};

export const searchProduct = (req, res) => {
  const { name } = req.query;

  const products = model.getAllProducts();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, categories, description ,price } = req.body;

  const newProduct = await model.createProduct({ name, categories, description ,price });

  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  //console.log(productId);

  const product = await model.deleteProduct(productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

 // res.status(204).send();
  res.status(200).json({ message: `Producto eliminado` });
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  // console.log(productId);
  // console.log(productData); 
  
  try {
    const updatedProduct = await model.updateProduct(productId, productData);

    if (!updatedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({
      message: `Producto reemplazado correctamente`,
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const patchProduct = async (req, res) => {
  const productId = req.params.id;
  const partialData = req.body;

 // console.log("BODY recibido:", partialData);

  try {
    const updatedProduct = await model.patchProduct(productId, partialData);

    if (!updatedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ message: `Se aplicaron las modificaciones indicadas`, updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};