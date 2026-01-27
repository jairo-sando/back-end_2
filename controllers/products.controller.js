
import ProductRepository from "../repositories/product.repository.js";

const repository = new ProductRepository();

/* GET PRODUCTS (USER / ADMIN) */
export const getProducts = async (req, res) => {
  try {
    const products = await repository.getAll();
    res.json({
      status: "success",
      products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* CREATE PRODUCT (ADMIN) */
export const createProduct = async (req, res) => {
  try {
    const product = await repository.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* UPDATE PRODUCT (ADMIN) */
export const updateProduct = async (req, res) => {
  try {
    const product = await repository.update(req.params.pid, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* DELETE PRODUCT (ADMIN) */
export const deleteProduct = async (req, res) => {
  try {
    await repository.delete(req.params.pid);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};