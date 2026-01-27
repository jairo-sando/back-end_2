
import ProductRepository from "../repositories/product.repository.js";
const repository = new ProductRepository();

export const createProduct = async (req, res) => {
  const product = await repository.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await repository.update(req.params.pid, req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await repository.delete(req.params.pid);
  res.json({ message: "Producto eliminado" });
};