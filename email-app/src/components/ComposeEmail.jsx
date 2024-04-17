import React from "react";

const ComposeEmail = () => {
  return (
    <div className="p-3">
      <p className="font-semibold">New Message</p>
      <form className="pt-2 flex flex-col max-w-xl">
        <label htmlFor="sender" className="mb-2">Sender:</label>
        <input type="text" placeholder="Sender" className="p-2 border-none bg-stone-100 mb-2" />

        <label htmlFor="To" className="mb-2">To:</label>
        <input
          type="text"
          placeholder="Recipient"
          className="p-2 border-none bg-stone-100 mb-2"
        />

        <label htmlFor="message" className="mb-2">Message:</label>
        <textarea placeholder="Message" className="bg-stone-100 p-2 mb-2" />

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
