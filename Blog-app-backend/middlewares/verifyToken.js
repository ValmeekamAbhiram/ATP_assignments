import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const { verify } = jwt;

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // get token from cookie
      const token = req.cookies?.token;

      // check token exists
      if (!token) {
        return res.status(401).json({ message: "Please login first" });
      }

      // verify token
      const decodedToken = verify(token, process.env.SECRET_KEY);

      // check role
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "You are not authorized" });
      }

      // attach user data
      req.user = decodedToken;

      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};