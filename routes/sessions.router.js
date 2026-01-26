
import { Router } from "express";
const router = Router();
import { userDTO } from "../dto/user.dto.js";
import { UserModel } from "../dao/models/user.model.js";
import { createHash } from "../utils/bcrypt.js";
import { authJWT } from "../middlewares/auth.js";

import { isValidPassword} from "../utils/bcrypt.js";

import { generateToken} from "../utils/jwt.js";




router.post("/register", async (req, res) => {

  console.log("BODY:", req.body);
  const { first_name, last_name, email, age, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Usuario ya existe" });
    }

    const newUser = {
      first_name,
      last_name,
      email,
      age,
      password: createHash(password) 
    };

    await UserModel.create(newUser);

    res.status(201).json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: "Email y password requeridos" });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user || !isValidPassword(user, password)) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = generateToken(user);

    res.json({ message: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/current", authJWT, (req, res) => {
  res.json({
    user: userDTO(req.user)
  });
});
export default router;