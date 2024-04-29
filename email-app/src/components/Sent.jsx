import React from "react";

const Sent = () => {
  return (
    <div className="container">
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <p className="font-bold">malta@chatmail.com</p>
        <p>Confirmation</p>
        <p>Salary in two weeks time</p>
        <p className="font-bold text-slate-600">8:02 AM</p>
      </div>
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <p className="font-bold">mandalorian@chatmail.com</p>
        <p>The Pattern</p>
        <p>This is the Way</p>
        <p className="font-bold text-slate-600">8:12 AM</p>
      </div>
      <div className="mail content flex gap-2 p-3 shadow-sm items-center justify-evenly border">
        <p className="font-bold">angelopeters@chatmail.com</p>
        <p>Meeting</p>
        <p>Meeting is at 18:30 today!</p>
        <p className="font-bold text-slate-600">8:12 AM</p>
      </div>
    </div>
  );
};

export default Sent;
