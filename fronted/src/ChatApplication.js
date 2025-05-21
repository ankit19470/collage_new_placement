import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Application.css';
import { Link } from 'react-router-dom';
// Link
const socket = io('http://localhost:1000');
function ChatApplication(){
     const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  useEffect(() => {
    const user = prompt('Enter your name:') || 'Anonymous';
    setUsername(user);
  }, []);
  const sendMessage = () => {
    if (message.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      socket.emit('send_message', { username, message, timestamp });
      setMessage('');
    }
  };
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });
    return () => socket.off('receive_message');
  }, []);
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="/assets/logo/ctbanner.png"
                                className="card-img-bottom"
                                alt="..."
                                style={{ minHeight: "350px" }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>chat<br /><Link to={"/companymaster/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/JOB</Link> </h1>
                            </div>
                        </div>
                    </div>
                </div>
    <div className="chat-wrapper">
      <div className="chat-header">Live Chat</div>

      <div className="chat-body">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`message-row ${msg.username === username ? '' : 'other'}`}
          >
            <div className="message-meta">
              {msg.username} • {msg.timestamp}
            </div>
            <div className="message-text">{msg.message}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
          className="chat-input"
        />
        <button onClick={sendMessage} className="chat-button">Send</button>
      </div>
    </div>
    </>
  );
}
export default ChatApplication