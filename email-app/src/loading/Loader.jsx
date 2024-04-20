import React from "react";
import spinner from "../assets/spinner.svg";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="waiting" className="mx-auto w-96 h-96" />
    </div>
  );
};

export default Loader;
