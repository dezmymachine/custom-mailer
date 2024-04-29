import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ComposeEmail = () => {
  const sender = localStorage.getItem("email");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_URL;
  const [from, setFrom] = useState(sender);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    //get formData
    const formData = new FormData(e.target);
    //send formData to backend
    const response = await fetch(`${baseUrl}/messages`, {
      method: "POST",
      body: JSON.stringify({
        from: formData.get("from"),
        to: formData.get("to"),
        subject: formData.get("subject"),
        body: formData.get("body"),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("loggedtoken")}`,
      },
    });
    if (response.status === 201) {
      const data = await response.json();
      navigate("/home/sent");
    }
  };

  return (
    <div className="p-3 border">
      <p className="font-semibold">New Message</p>
      <form className="pt-2 flex flex-col max-w-2xl" onSubmit={sendEmail}>
        <label htmlFor="sender" className="mb-2">
          Sender:
        </label>
        <input
          type="text"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Sender"
          className="p-2 border-none bg-stone-100 mb-2"
        />

        <label htmlFor="To" className="mb-2">
          To:
        </label>
        <input
          type="text"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Recipient"
          className="p-2 border-none bg-stone-100 mb-2"
        />
        <label htmlFor="subject" className="mb-2">
          Subject:
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="p-2 border-none bg-stone-100 mb-2"
        />

        <label htmlFor="message" className="mb-2">
          Message:
        </label>
        <textarea
          placeholder="Message"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="bg-stone-100 p-2 mb-2"
        />

        <button
          type="submit"
          className="bg-primary text-white rounded-full text-xl p-2 mt-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ComposeEmail;
