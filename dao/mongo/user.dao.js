
import { UserModel } from "../models/user.model.js";

export default class UserDAO {
  async getByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async getById(id) {
    return await UserModel.findById(id);
  }

  async create(userData) {
    return await UserModel.create(userData);
  }

  async updatePassword(userId, newHashedPassword) {
    return await UserModel.findByIdAndUpdate(
      userId,
      { password: newHashedPassword },
      { new: true }
    );
  }

  async updateRole(userId, role) {
    return await UserModel.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );
  }

  async getAll() {
    return await UserModel.find();
  }
}