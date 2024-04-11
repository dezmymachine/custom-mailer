import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="bg-black text-white font-bold p-2 w-1/2">Root</div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
