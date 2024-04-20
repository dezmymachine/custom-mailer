import { User } from "../models/users.js";
import jwt from "jsonwebtoken";

export const userVerfication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // Bearer token
  if (!token) {
    return res.status(401).json({ status: false, message: "" });
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: err.message });
    } else {
      req.user = data;
      next();
    }
  });
};
