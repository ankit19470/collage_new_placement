import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:1000"); // Connect to server

const ChatComponent = ({ userId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Join chat room when component mounts
  useEffect(() => {
    socket.emit("join", { userId });

    // Receive messages
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("message");
  }, [userId]);

  // Send message
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", { sender: userId, receiver: receiverId, text: message });
      setMessages((prev) => [...prev, { sender: userId, text: message }]);
      setMessage("");
    }
  };
  return (
    <div>
      <h2>Chat with {receiverId}</h2>
      <div style={{ border: "1px solid black", height: "300px", overflowY: "scroll", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ color: msg.sender === userId ? "blue" : "green" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
