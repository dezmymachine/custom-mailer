import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="">Root</div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
