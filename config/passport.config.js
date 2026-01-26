
import passport from "passport";
import jwt from "passport-jwt";
import { UserModel } from "../dao/models/user.model.js";
import { jwtSecret } from "./jwt.config.js";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

export const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
      },
      async (jwt_payload, done) => {
        try {
          const user = await UserModel.findById(jwt_payload.user.id);
          if (!user) return done(null, false);
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};