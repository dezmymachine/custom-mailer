import React from "react";
import errorpic from "../assets/pnf.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center font-stix font-bold p-5">
      <h1 className="">Oops!</h1>
      <img src={errorpic} alt="page not found" className="mx-auto h-96 w-96" />
      <p className="">Sorry, an unexpected error has occurred.</p>
      <button className="rounded  bg-primary text-white p-3 mt-2 hover:bg-secondary">
        <Link to="/home">Go back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
