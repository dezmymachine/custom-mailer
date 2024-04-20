import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import ErrorFetch from "../error/ErrorFetch";
import Loader from "../loading/Loader";

const Inbox = () => {
  const baseUrl = import.meta.env.VITE_URL;
  const { data, loading, error } = useFetch(`${baseUrl}/messages`);

  if (error) return <ErrorFetch />;
  if (loading) return <Loader />;

  return (
    <div className="container text-black">
      {data &&
        data.map((message) => (
          <div key={message.id}>
            <input type="checkbox" className="hidden sm:block" />
            <p>{message.from}</p>
            <p>{message.subject}</p>
            <p>{message.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Inbox;
