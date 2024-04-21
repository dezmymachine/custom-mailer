import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../loading/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_URL;
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Register = async (event) => {
    setLoading(true);
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Post form data to the backend
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);
      navigate("/login");
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="bg-stone-100 font-stix p-5 mx-auto min-h-screen sm:flex sm:items-center sm:justify-center">
        <div className="w-full max-w-md rounded shadow-2xl p-5">
          <h2 className="font-bold text-xl text-center">Sign Up</h2>
          <h3 className="font-semibold text-xl text-center pt-3">
            Hi, <span>&#128075;</span> welcome! to Chat Mail
          </h3>

          <form className="flex flex-col pt-4" onSubmit={Register}>
            <label htmlFor="fullname" className="text-slate-600 pt-2">
              Full Name
            </label>
            <input
              aria-label="fullname"
              placeholder="Full name"
              name="fullName"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              type="text"
              className="p-2 border rounded"
            />
            <label htmlFor="email" className="text-slate-600 pt-2">
              Email Address
            </label>
            <input
              aria-label="email address"
              placeholder="email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-2 border rounded"
            />

            <label htmlFor="password" className="text-slate-600 pt-2">
              Password
            </label>
            <input
              aria-label="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
  }
};

export default SignUp;
