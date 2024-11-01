import React, { useState } from 'react';
import '../styles/ChatBox.css';

const ChatBox = ({ subProject }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'User' }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <h3>{subProject.name}</h3>
      <p><strong>Goal:</strong> {subProject.goal}</p>
      <p><strong>What has been done:</strong> {subProject.done}</p>
      <p><strong>Current issues:</strong> {subProject.issues}</p>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;