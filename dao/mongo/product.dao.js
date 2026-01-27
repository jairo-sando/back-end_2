
import { ProductModel } from "../models/product.model.js";

export default class ProductDAO {
  getById(id) {
    return ProductModel.findById(id);
  }

  getAll() {
    return ProductModel.find();
  }

  create(data) {
    return ProductModel.create(data);
  }

  update(id, data) {
    return ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return ProductModel.findByIdAndDelete(id);
  }
}