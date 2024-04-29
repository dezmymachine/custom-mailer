import React from "react";
import logout from "../assets/logout.svg";
import user from "../assets/usblue.svg";
import { Link } from "react-router-dom";
const Profile = () => {
  const userName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  return (
    <div className="sm:p-3 mx-2">
      <div className="">
        <img src={user} alt="profile" className="h-32 w-32 p-2 mb-2" />
        <div className="text flex items-center gap-2">
          <p className="font-semibold">Username:</p>
          <p className="font-semibold text-primary text-2xl">{userName}</p>
        </div>
        <div className="text flex items-center gap-2">
          <p className="font-semibold">Email:</p>
          <p className="font-semibold text-primary text-xl">{email}</p>
        </div>
      </div>
      <Link to="/login">
        <button className="border border-primary p-2 flex items-center justify-center rounded font-semibold text-primary gap-1 hover:bg-primary hover:text-white mt-2">
          Logout
          <span>
            <img src={logout} alt="logout" className="h-5 w-5" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Profile;
