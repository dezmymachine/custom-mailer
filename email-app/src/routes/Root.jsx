import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import profilepic from "../assets/profile.svg";
import { useState } from "react";
import compose from "../assets/compose.svg";
import inboxIcon from "../assets/inbox.svg";
import sentIcon from "../assets/sent.png";

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-2 font-stix">
        <div className="top-bar px-3">
          <div className="searchbar-nav flex items-center gap-2">
            <input
              type="text"
              placeholder="Search in Email"
              class="p-2 border rounded-full  w-full text-primary border-primary"
            />
            <Link to="/profile">
              <img src={profilepic} alt="profile-icon" className="h-16" />
            </Link>
          </div>
        </div>

        <div className="content-container flex gap-1">
          <div className="side-bar flex flex-col p-2 items-center bg-transparent h-screen">
            {/* <img src={logo} alt="logo" className="h-20 sm:hidden" /> */}
            <p className="text-primary font-bold">ChatMail</p>
            <div className="links flex flex-col gap-2 pt-2">
              <Link
                to="/home/compose"
                className="font-semibold gap-1 flex items-center"
              >
                <img src={compose} alt="sent-icon" className="h-8" />
              </Link>
              <Link
                to="/home/inbox"
                className="flex items-center gap-1 font-semibold"
              >
                <span>
                  <img src={inboxIcon} alt="inbox-icon" className="h-8" />
                </span>
              </Link>
              <Link
                to="/home/sent"
                className="flex items-center font-semibold gap-1"
              >
                <img src={sentIcon} alt="sent-icon" className="h-8" />
              </Link>
            </div>
          </div>

          <div className=" p-2 w-full rounded-lg font-semibold text-secondary border inset-0 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
