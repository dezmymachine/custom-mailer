import React from "react";

const Sent = () => {
  return (
    <div className="container">
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <p className="font-bold">Jane Doe</p>
        <p>Confirmation</p>
        <p>This is the message...</p>
        <p className="font-bold text-slate-600">8:02 AM</p>
      </div>
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <p className="font-bold">Supa Doe</p>
        <p>Collaboration</p>
        <p>This is the message...</p>
        <p className="font-bold text-slate-600">8:12 AM</p>
      </div>
    </div>
  );
};

export default Sent;
