import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ name: string; text: string }[]>([]);
  const [userName, setUserName] = useState(''); // Store the name of the user

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { name: userName || 'User', text: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">Chat with Us</h5>

        {/* User name input */}
        {!userName && (
          <div className="mb-3">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
              style={{ borderRadius: '20px', padding: '10px 15px' }}
            />
          </div>
        )}

        <div className="chatbox">
          {/* Display messages */}
          <div className="chatbox-messages mb-3" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            {messages.length === 0 ? (
              <div className="text-muted">No messages yet. Start chatting!</div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="chatbox-message">
                  <div className="chat-message bubble">
                    <strong>{msg.name}:</strong> {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message input */}
          <div className="chatbox-input d-flex align-items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control me-2"
              placeholder="Type your message..."
              style={{ borderRadius: '20px', padding: '10px 15px' }}
            />
            <button
              onClick={handleSendMessage}
              className="btn btn-primary"
              style={{ borderRadius: '20px' }}
              disabled={!message.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
