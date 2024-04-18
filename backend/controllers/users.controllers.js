import { User } from "../models/users.js";
//login user
export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const signIn = await User.findOne({
      email,
      password,
    });
    res.status(200).json(signIn);
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
export const getusers = async (req, res, next) => {
  try {
    const getResult = await User.find();
    res.status(200).json(getResult);
  } catch (error) {
    next(error);
  }
};

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
