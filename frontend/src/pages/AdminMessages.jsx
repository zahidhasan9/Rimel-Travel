import React, { useEffect, useState } from "react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleDelete = (id) => {
    const filtered = messages.filter((msg) => msg.id !== id);
    localStorage.setItem("contactMessages", JSON.stringify(filtered));
    setMessages(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-[#41A4FF] mb-8 text-center">
        Received Messages
      </h2>

      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages found.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-[#41A4FF]">
                  {msg.name}
                </h3>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Email:</span> {msg.email}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Message:</span> {msg.message}
              </p>
              <p className="text-gray-500 text-sm mt-2">{msg.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
