import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewLogin({ setUserId, handleLogin }) {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (type) => {
    if (!id) {
      alert("Please enter your ID");
      return;
    }
    setUserId(id);
    handleLogin(type);
    navigate("/chat");
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <input
        type="text"
        placeholder="Enter your ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => handleSubmit("Student")}>Login as Student</button>
      <button onClick={() => handleSubmit("Company")}>Login as Company</button>
    </div>
  );
}

export default NewLogin
