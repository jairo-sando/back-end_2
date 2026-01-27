
import jwt from "jsonwebtoken";

import { jwtSecret} from "../config/jwt.config.js";

export const generateResetToken = (email) =>
  jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });


