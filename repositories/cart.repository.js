
import CartDAO from "../dao/mongo/cart.dao.js";

export default class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  getById(id) {
    return this.dao.getById(id);
  }

  update(id, data) {
    return this.dao.update(id, data);
  }
}