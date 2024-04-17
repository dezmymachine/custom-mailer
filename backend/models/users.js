import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create static signup method for user
userSchema.statics.signup = async function (fullName, email, password) {
  // Check if email already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already in use");
  } else {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({
      fullName,
      email,
      password: hash,
    });
    return user;
  }
};

export const User = model("Users", userSchema, "users");
