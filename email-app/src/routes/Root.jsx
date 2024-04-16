import React from "react";
import user from "../assets/uswhite.svg";
import mail from "../assets/mail.svg";
import { Link, Outlet } from "react-router-dom";
import inbox from "../assets/inboxe.svg";
import sent from "../assets/sentmail.svg";
import compose from "../assets/write.svg";

const Root = () => {
  return (
    <>
      <div className="topbar bg-primary font-stix p-2 flex justify-between items-center gap-2 px-5 w-full">
        <p className="font-bold text-white text-xl">ChatMail</p>
        <input
          type="text"
          placeholder="Search"
          className="bg-white rounded shadow-inner p-2.5 w-1/2"
        />
        <Link to="/home/profile">
          <img src={user} alt="user-icon" className="h-12" />
        </Link>
      </div>
      <div className="createmail bg-white  p-2 shadow-sm flex items-center sm:gap-5">
        <Link
          className="create-box bg-primary text-white flex items-center gap-1 p-2 rounded"
          to="/home/compose"
        >
          <img src={mail} alt="mail-icon" className=" sm:h-12 h-8" />
          <p className="font-semibold text-xl">Create Mail</p>
        </Link>

        <p className="text-primary font-bold sm:text-2xl">
          Welcome to ChatMail Service
        </p>
      </div>

      <div className="render-div flex gap-1">
        <div className="sidebar">
          <Link to="/home/inbox" className="flex">
            <img src={inbox} className="w-8" />
            <p>Inbox</p>
          </Link>
          <Link to="/home/sent" className="flex">
            <img src={sent} className="w-8" />
            <p>Sent Items</p>
          </Link>
          <Link to="/home/compose" className="flex">
            <img src={compose} className="w-8" />
            <p>Compose</p>
          </Link>
        </div>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
