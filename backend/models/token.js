import { Schema, model } from "mongoose";
const tokenSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  active: { type: Boolean, default: false },
});

export const Token = model("Token", tokenSchema, "token");
