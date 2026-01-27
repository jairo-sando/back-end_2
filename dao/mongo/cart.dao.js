import CartModel from "../models/cart.model.js";

export default class CartDAO {
  async create(cart) {
    return await CartModel.create(cart);
  }

  async getById(id) {
    return await CartModel.findById(id).populate("products.product");
  }

  async update(id, data) {
    return await CartModel.findByIdAndUpdate(id, data, { new: true });
  }
}