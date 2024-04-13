import React from "react";

const Inbox = () => {
  return (
    <div className="container">
      <div className="mail content flex gap-2 border">
        <input type="checkbox" />
        <p>From:John Doe</p>
        <p>Subject:Hey what's up</p>
        <p>8:02 AM</p>
      </div>
    </div>
  );
};

export default Inbox;
