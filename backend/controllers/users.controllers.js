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
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const register = await User.signup(
      firstName,
      lastName,
      email,
      username,
      password
    );
    res.status(201).json(register);
  } catch (error) {
    next(error);
  }
};

//getusers
export const getusers = async (req, res, next) => {
  try {
    const getResult = await User.find();
    res.status(200).json(getResult);
  } catch (error) {
    next(error);
  }
};

//getuser by id
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
