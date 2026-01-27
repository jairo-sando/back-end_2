
import express from "express";
import dotenv from "dotenv";
import passport from "passport";

import { connectDB } from "./config/database.js";
import { initializePassport } from "./config/passport.config.js";

import sessionsRouter from "./routes/sessions.router.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/* MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* PASSPORT */
initializePassport();
app.use(passport.initialize());

/* ROUTES */
app.use("/api/sessions", sessionsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

/* SERVER */
connectDB();
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});