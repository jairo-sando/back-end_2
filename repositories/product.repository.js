
import ProductDAO from "../dao/mongo/product.dao.js";

export default class ProductRepository {
  constructor() {
    this.dao = new ProductDAO();
  }

  getById(id) {
    return this.dao.getById(id);
  }

  create(data) {
    return this.dao.create(data);
  }

  update(id, data) {
    return this.dao.update(id, data);
  }

  delete(id) {
    return this.dao.delete(id);
  }
}