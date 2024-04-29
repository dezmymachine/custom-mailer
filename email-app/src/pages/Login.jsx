import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../loading/Loader";

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async (event) => {
    setLoading(true);
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Post form data to the backend
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("loggedtoken", data.token);
      navigate("/home");
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
          <h2 className="font-bold text-xl text-center">Sign In</h2>
          <h3 className="font-semibold text-xl text-center pt-3">
            Hi, <span>&#128075;</span> welcome! to Chat Mail
          </h3>

          <form className="flex flex-col pt-4" onSubmit={signIn}>
            <label htmlFor="email" className="text-slate-600 pt-2">
              Email Address
            </label>
            <input
              aria-label="email address"
              placeholder="email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
  }
};

export default Login;
