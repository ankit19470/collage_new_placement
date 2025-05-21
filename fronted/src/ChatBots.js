import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
import { FaUser, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// Link
function ChatBots(){
      const [input, setInput] = useState('');
      const [chat, setChat] = useState([]);
      const handleSend = async () => {
    const userMessage = { type: 'user', text: input };
    setChat([...chat, userMessage]);
    setInput('');
    try {
      const res = await axios.post('http://localhost:1000/api/chat', { message: input });
      const botMessage = { type: 'bot', text: res.data.reply };
      setChat(prev => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    }
  };
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
                                    <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Chat bot<br /><Link to={"/companymaster/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/chat</Link> </h1>
                                </div>
                            </div>
                        </div>
                    </div>
    <div className="app-container">
      <h2>AI ChatBot</h2>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <span className="icon">
              {msg.type === 'user' ? <FaUser /> : <FaRobot />}
            </span>
            <span><b>{msg.type === 'user' ? 'You' : 'Bot'}:</b> {msg.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
    </>
  );
}
export default ChatBots
