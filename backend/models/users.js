import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
export const User = model("Users", userSchema, "users");
