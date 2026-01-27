
import UserRepository from "../repositories/user.repository.js";
import UserDTO from "../dto/user.dto.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";

const userRepository = new UserRepository();

/* REGISTRO */
export const register = async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    const exists = await userRepository.getUserByEmail(email);
    if (exists) {
      return res.status(400).json({ error: "Usuario ya existe" });
    }

    await userRepository.createUser({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password)
    });

    res.status(201).json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.getUserByEmail(email);
    if (!user || !isValidPassword(user, password)) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = generateToken(user);
    res.json({ message: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Current */
export const current = async (req, res) => {
  try {
    const userDTO = new UserDTO(req.user);
    res.json({ user: userDTO });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Reset Pasword */
export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepository.getUserByEmail(decoded.email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (isValidPassword(user, newPassword)) {
      return res.status(400).json({
        error: "No puede usar la misma contraseña anterior"
      });
    }

    await userRepository.updatePassword(
      user._id,
      createHash(newPassword)
    );

    res.json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};