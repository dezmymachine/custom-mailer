import { Message } from "../models/messages.js";

export const getMessages = async (req, res, next) => {
  try {
    //get all messages
    const getMessage = await Message.find();
    //return response
    res.status(200).json(getMessage);
  } catch (error) {
    next(error);
  }
};

export const addMessage = async (req, res, next) => {
  const { from, to, subject, body, date, read } = req.body;
  try {
    //add a message to database
    const createMsg = await Message.create({
      from,
      to,
      subject,
      body,
      date,
      read,
    });
    //return response
    res.status(201).json(createMsg);
  } catch (error) {
    next(error);
  }
};
