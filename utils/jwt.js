
import jwt from "jsonwebtoken";

import { jwtSecret} from "../config/jwt.config.js";

export const generateToken = (user) => {

 return jwt.sign(
   {
      user: {
       
        id: user._id,
        email: user.email,
        role: user.role
      }  
    },
    jwtSecret,
    { expiresIn:"1h"}

 );


};


