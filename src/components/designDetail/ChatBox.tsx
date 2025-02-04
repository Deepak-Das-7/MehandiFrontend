import React, { useState } from "react";
import { useLoggedUserContext } from "../../context/Auth";

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ name: string; text: string; createdAt: string }[]>([]);
  const { user } = useLoggedUserContext();
  const [userName] = useState(user?.name || "User");


  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { name: userName, text: message, createdAt: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="card shadow-sm mb-3" >
      <div className="card-body p-3">
        <h5 className="card-title text-center mb-3 text-primary">Chat</h5>

        <div className="chatbox" style={{ maxHeight: "300px", overflowY: "auto" }}>
          <div className="chatbox-messages mb-3">
            {messages.length === 0 ? (
              <div className="text-muted text-center">No messages yet. Start chatting!</div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`chatbox-message mb-2`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold text-primary">{msg.name}</span>
                    <span className="text-muted small">{msg.createdAt}</span>
                  </div>
                  <div className="text-dark">{msg.text}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Input Area */}
        <div className="d-flex align-items-center mt-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control me-2"
            placeholder="Type your message..."
            style={{
              borderRadius: "20px",
              padding: "10px",
              fontSize: "0.9rem",
              border: "1px solid #ddd",
            }}
          />
          <button
            onClick={handleSendMessage}
            className=" py-2 rounded-pill shadow-sm btn btn-primary"
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
