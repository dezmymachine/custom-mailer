import { User } from "../models/users.js";
import { createSecretToken } from "../utils/SecretToken.js";
import bcrpt from "bcrypt";
import { Token } from "../models/token.js";

//signup user
export const SignUp = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, fullName });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "User signed up successfully", user });
  } catch (error) {
    next(error);
  }
};

//login user
export const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email or password" });
    }
    const auth = await bcrpt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }
    const token = createSecretToken(user._id);

    //append this token to tokenModel
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully" });
  } catch (error) {
    next(error);
  }
};

//getusers (update to logout)
export const logOut = async (req, res, next) => {
  try {
    //can apply UpdateMany to token model and set active to false
    res.cookie("token", "", { expires: new Date(0), httpOnly: false });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

//getuser by id(update to getsingle user)

export const getMe=async(req,res,next)=>{
  try {
    res.json(req.user)
  } catch (error) {
    next(error)
  }
}
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
