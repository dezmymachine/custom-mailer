import React from "react";

const Profile = () => {
  const userName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  return (
    <div className="sm:p-3">
      <div>
        <p className="">Logged in as:</p>
        <p>{userName}</p>
        <p>Email:</p>
        <p className="font-semibold text-primary">{email}</p>
      </div>
    </div>
  );
};

export default Profile;
