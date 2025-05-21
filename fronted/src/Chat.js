// ChatApp.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:1000'); // Update as per your backend

function Chat() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('send message', (chatMessage) => {
      setChat((prev) => [...prev, chatMessage]);
    });

    return () => {
      socket.off('send message'); // Clean up listener
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!username || !message) return;

    const chatMessage = { name: username, message };
    socket.emit('send message', chatMessage);
    setMessage('');
  };

  return (
    
    <div className="chat-container">
      <h2>React Chat Room</h2>
      <div className="chat-box">
        {chat.map((c, i) => (
          <div key={i} className="message">
            <strong>{c.name}:</strong> {c.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
