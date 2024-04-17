import React from "react";

const Inbox = () => {
  return (
    <div className="container">
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <input type="checkbox" className="hidden sm:block" />
        <p className="font-bold">John Doe</p>
        <p>Hey what's up</p>
        <p>This is the message...</p>
        <p className="font-bold text-slate-600">8:02 AM</p>
      </div>
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <input type="checkbox" className="hidden sm:block" />
        <p className="font-bold">John Doe</p>
        <p>Hey what's up</p>
        <p>This is the message...</p>
        <p className="font-bold text-slate-600">8:02 AM</p>
      </div>
    </div>
  );
};

export default Inbox;
