import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InboxDetails = () => {
  const { id } = useParams();
  const [message, setMessage] = useState([]); // Set initial state to an empty array

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_URL;
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${baseUrl}/messages/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loggedtoken")}`,
          },
        });
        const data = await response.json();
        setMessage(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    fetchMessages();
  }, [id]);

  return (
    <div>
      {message.length > 0 &&
        message.map((item) => <p key={item._id}>{item.body}</p>)}
    </div>
  );
};

export default InboxDetails;
