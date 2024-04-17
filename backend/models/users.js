// import { Schema, model } from "mongoose";
// import bcrypt from "bcrypt";
// const userSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   username: { type: String, unique: true, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// //create static signup method for user
// userSchema.statics.signup = async function (
//   firstName,
//   lastName,
//   username,
//   email,
//   password
// ) {
//   //check to see if email already exist
//   const exists = await this.findOne();
//   if (exists) {
//     throw Error("Email already in use");
//   } else {
//     //hashpassword
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     const user = await this.create({
//       firstName,
//       lastName,
//       username,
//       email,
//       password: hash,
//     });
//     return user;
//   }
// };
// export const User = model("Users", userSchema, "users");
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create static signup method for user
userSchema.statics.signup = async function (
  firstName,
  lastName,
  username,
  email,
  password
) {
  // Check if email already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already in use");
  } else {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({
      firstName,
      lastName,
      username,
      email,
      password: hash,
    });
    return user;
  }
};

export const User = model("Users", userSchema, "users"); 
