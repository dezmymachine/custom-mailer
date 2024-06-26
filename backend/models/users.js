import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  const saltRounds = 12;
  this.password = await bcrypt.hash(this.password, saltRounds);
});

export const User = model("Users", userSchema, "users");
