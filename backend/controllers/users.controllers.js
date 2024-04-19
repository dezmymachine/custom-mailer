import { User } from "../models/users.js";
import { jwt } from "jsonwebtoken";

//createToken
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user
export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const signIn = await User.findOne({
      email,
      password,
    });
    res.status(200).json("logged in succesfully");
  } catch (error) {
    next(error);
  }
};

//signup user
export const SignUp = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  try {
    const register = await User.signup(email, fullName, password);
    res.status(201).json("account created");
  } catch (error) {
    next(error);
  }
};

//getusers (update to logout)
export const logOut = async (req, res, next) => {};

//getuser by id(update to getsingle user)
export const getUserById = async (req, res, next) => {
  try {
    const findUderById = await User.findById(req.params.id);
    if (findUderById === null) {
      res.status(404).json({
        message: `User with ID:${req.params.id} not found`,
      });
    } else {
      //return positive response
      res.status(200).json(findUderById);
    }
  } catch (error) {
    next(error);
  }
};
