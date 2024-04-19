import { User } from "../models/users.js";
import jwt from "jsonwebtoken";

export const userVerfication = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.fullName });
      } else return res.json({ status: false });
    }
  });
};
