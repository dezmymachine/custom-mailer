import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import ErrorFetch from "../error/ErrorFetch";
import Loader from "../loading/Loader";
import { Link } from "react-router-dom";

const Inbox = () => {
  const baseUrl = import.meta.env.VITE_URL;
  const { data, loading, error } = useFetch(`${baseUrl}/messages`);

  if (error) return <ErrorFetch />;
  if (loading) return <Loader />;

  return (
    <div className="container text-black flex flex-col gap-1">
      {data &&
        data.map((message) => (
          <div
            key={message._id}
            className="flex border p-3 items-center gap-2 justify-between"
            style={{ maxWidth: "800px" }}
          >
            <Link to={`/home/inbox/${message._id}`}>
              <p className="font-semibold text-primary">{message.from}</p>
            </Link>
            <p className="font-semibold text-slate-500">{message.subject}</p>
            <p className="text-slate-900">{message.body}</p>
            <p className="text-slate-900 font-semibold">
              {new Date(message.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Inbox;
