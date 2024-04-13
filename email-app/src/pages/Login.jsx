import React from "react";
import { Link } from "react-router-dom";
import googleicon from "../assets/google.png";
import fbicon from "../assets/fbicon.svg";

const Login = () => {
  return (
    <div className="bg-white font-stix p-5 mx-auto min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="w-full max-w-md rounded shadow-xl p-5">
        <h2 className="font-bold text-xl text-center">Sign In</h2>
        <h3 className="font-semibold text-xl text-center">
          Hi, <span>&#128075;</span> welcome! to Chat Mail
        </h3>
        {/* <div className="signup-options pt-2 flex items-center gap-1 justify-center">
          <button className="bg-white rounded border flex items-center font-semibold gap-1 p-2">
            <span>
              <img src={googleicon} alt="google-icon" className="h-8" />
            </span>
            Sign in with Google
          </button>
          <button className="bg-white rounded border flex items-center gap-1 p-2 font-semibold">
            <span>
              <img src={fbicon} alt="google-icon" className="h-8" />
            </span>
            Sign in with Facebook
          </button>
        </div> */}

        <form className="flex flex-col pt-4">
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
              Sign In
            </button>
          </div>
        </form>
        <p className="text-slate-600 text-center flex items-center justify-center gap-2 pt-3">
          Don't have an account?
          <Link
            to="/"
            className="underline underline-offset-2 text-primary text-center"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
