import React from "react";
import { Link } from "react-router-dom";
import cancel from "../assets/cancel.svg";
const ErrorFetch = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <img src={cancel} className="h-96 w-96" />
      <p className="text-red-600 font-semibold">
        Oops...Error loading info Click to go back
      </p>
      <button className="rounded bg-red-600 text-white p-2 font-semibold">
        <Link to="/home">Go Back</Link>
      </button>
    </div>
  );
};

export default ErrorFetch;
