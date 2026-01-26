
import passport from "passport";

import { initializePassport } from "./config/passport.config.js";

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const SECRET = process.env.JWT_SECRET;

initializePassport();
app.use(passport.initialize());


