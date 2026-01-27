
import { CartModel } from "../models/cart.model.js";

export default class CartDAO {
  getById(id) {
    return CartModel.findById(id).populate("products.product");
  }

  update(id, data) {
    return CartModel.findByIdAndUpdate(id, data, { new: true });
  }
}