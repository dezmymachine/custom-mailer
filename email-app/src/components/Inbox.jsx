import React, { useState, useEffect } from "react";
// import { useFetch } from "../hooks/useFetch";
import ErrorFetch from "../error/ErrorFetch";
import Loader from "../loading/Loader";

const Inbox = () => {
  const baseUrl = import.meta.env.VITE_URL;
  // const { data, loading, error } = useFetch(`${baseUrl}/messages`);

  // if (error) return <ErrorFetch />;
  // if (loading) return <Loader />;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/messages`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
