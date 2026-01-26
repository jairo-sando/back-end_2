import express from "express";
import mongoose from "mongoose";
import passport from "passport";

import sessionsRouter from "./routes/sessions.router.js";
import { initializePassport } from "./config/passport.config.js";

const app = express();
const PORT = 8080;

/* ================== MIDDLEWARES ================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================== PASSPORT ================== */
initializePassport();
app.use(passport.initialize());

/* ================== ROUTES ================== */
app.use("/api/sessions", sessionsRouter);

/* ================== MONGODB ================== */
mongoose
  .connect("mongodb://localhost:27017/backend2")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error MongoDB", err));

/* ================== SERVER ================== */
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});