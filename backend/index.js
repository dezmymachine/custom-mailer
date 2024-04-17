//import dependencies
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//import routes
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";

const PORT = process.env.PORT;

//initialize express
const app = express();

//use middlewares
app.use(cors());
app.use(express.json());

//use routes
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);

//make mongoose connection
await mongoose.connect(process.env.MONGO_URI);

//start the express server
app.listen(PORT, () => {
  console.log(`custom-mailer is running on port ${PORT}`);
});
