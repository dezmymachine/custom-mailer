import { Schema, model,Types } from "mongoose";
const tokenSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  active: { type: Boolean, default: true },
});

export const Token = model("Token", tokenSchema, "token");
