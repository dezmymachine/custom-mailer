import React from "react";
import { Link } from "react-router-dom";
import googleicon from "../assets/google.png";
import fbicon from "../assets/fbicon.svg";
import chatmailicon from "../assets/chatmail.png";

const SignUp = () => {
  return (
    <div className="bg-white shadow-2xl rounded-xl mt-5 p-5 font-stix mx-auto">
      <div className="flex items-center">
        <span>
          <img src={chatmailicon} className="h-24" alt="logo" />
        </span>
        <span className="font-bold text-2xl pb-5">Sign up</span>
      </div>
      <h3 className="font-semibold text-xl pt-4">
        Hi, <span>&#128075;</span> welcome! to chatMail
      </h3>
      <p className="pt-2">Please Create an Account below</p>

      <div className="sign up options pt-2 flex items-center justify-center gap-2">
        <button className="bg-white rounded border p-2 flex items-center gap-2 font-bold">
          <span>
            <img src={googleicon} alt="google-icon" className="h-8" />
          </span>
          Sign up with Google
        </button>
        <button className="bg-white rounded border p-2 flex items-center gap-2 font-bold">
          <span>
            <img src={fbicon} alt="google-icon" className="h-8" />
          </span>
          Sign up with Facebook
        </button>
      </div>

      <p className="text-center text-slate-400 text-xl pt-4">-OR-</p>
      <form className="flex flex-col pt-4">
        <label htmlFor="fullname" className="text-slate-600 pt-2">
          Full Name
        </label>
        <input
          aria-label="fullname"
          placeholder="enter your full name"
          type="text"
          className="p-2 border rounded"
        />
        <label htmlFor="email" className="text-slate-600 pt-2">
          Email Address
        </label>
        <input
          aria-label="email address"
          placeholder="email address"
          type="text"
          className="p-2 border rounded"
        />
        <label htmlFor="password" className="text-slate-600 pt-2">
          Password
        </label>
        <input
          aria-label="password"
          placeholder="password"
          type="password"
          className="p-2 border rounded"
        />
        <div className="mx-auto pt-4 w-full flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded w-1/2 font-bold"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex pt-2 gap-2">
        <p className="text-slate-600">Already have an account?</p>
        <Link to="/login" className="underline underline-offset-2 text-primary">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
