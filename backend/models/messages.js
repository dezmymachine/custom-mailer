import { Schema, model } from "mongoose";

//create a schema
const messageSchema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  read: { type: Boolean, required: false },
});

export const Message = model("Message", messageSchema, "messages");
