
import UserRepository from "../repositories/user.repository.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";

const userRepository = new UserRepository();

export const resetPasswordService = async (userId, newPassword) => {
  const user = await userRepository.getUserById(userId);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  
  if (isValidPassword(user, newPassword)) {
    throw new Error("No puede usar la misma contraseña");
  }

  const hashedPassword = createHash(newPassword);
  return await userRepository.updateUserPassword(userId, hashedPassword);
};