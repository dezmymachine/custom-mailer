import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-stone-100 font-stix p-5 mx-auto min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="w-full max-w-md rounded shadow-2xl p-5">
        <h2 className="font-bold text-xl text-center">Sign Up</h2>
        <h3 className="font-semibold text-xl text-center pt-3">
          Hi, <span>&#128075;</span> welcome! to Chat Mail
        </h3>

        <form className="flex flex-col pt-4">
          <label htmlFor="fullname" className="text-slate-600 pt-2">
            Full Name
          </label>
          <input
            aria-label="fullname"
            placeholder="Full name"
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
              <Link to="/home">Sign Up</Link>
            </button>
          </div>
        </form>
        <p className="text-slate-600 text-center flex items-center justify-center gap-2 pt-3">
          Already have an account?
          <Link
            to="/login"
            className="underline underline-offset-2 text-primary text-center"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
