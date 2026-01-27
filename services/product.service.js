
import ProductRepository from "../repositories/product.repository.js";

export default class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  createProduct(data) {
    return this.repository.create(data);
  }

  updateProduct(id, data) {
    return this.repository.update(id, data);
  }

  deleteProduct(id) {
    return this.repository.delete(id);
  }
}