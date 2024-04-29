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
    res.status(201).json("message created successfully");
  } catch (error) {
    next(error);
  }
};

export const getOneMessage = async (req, res, next) => {
  try {
    //get message id
    const getMessageID = await Message.findById(req.params.id);
    //return response
    res.status(200).json(getMessageID);
  } catch (error) {
    next(error);
  }
};
