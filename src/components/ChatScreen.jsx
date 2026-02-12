import { useState, useRef, useEffect } from "react";
import {
  getAIResponse,
  welcomeSuggestions,
  followUpQuestions,
} from "../data/chatResponses";
import ChatMessage from "./ChatMessage";
import "./ChatScreen.css";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const query = text || inputValue.trim();
    if (!query) return;

    const userMsg = { type: "user", text: query, id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getAIResponse(query);
      const aiMsg = {
        type: "ai",
        response,
        id: Date.now() + 1,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFollowUp = (question) => {
    handleSend(question);
  };

  const showWelcome = messages.length === 0;

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <div className="veda-avatar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="url(#vedaGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="vedaGrad" x1="2" y1="2" x2="22" y2="22">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="chat-header-title">Veda</span>
        <span className="chat-header-badge">AI</span>
      </div>

      <div className="chat-messages">
        {showWelcome && (
          <div className="welcome-section">
            <div className="welcome-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="url(#vedaGrad2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="vedaGrad2"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="welcome-title">
              Hi, I'm <span className="gradient-text">Veda</span>
            </h1>
            <p className="welcome-subtitle">
              Your AI-powered financial assistant. Ask me anything about stocks,
              mutual funds, or market analysis.
            </p>
            <div className="suggestion-chips">
              {welcomeSuggestions.map((suggestion, i) => (
                <button
                  key={i}
                  className="suggestion-chip"
                  onClick={() => handleSend(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, index) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onFollowUp={handleFollowUp}
            isLast={index === messages.length - 1}
          />
        ))}

        {isTyping && (
          <div className="typing-indicator">
            <div className="typing-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="url(#vedaGrad3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="vedaGrad3"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask Veda anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="chat-input"
          />
          <button
            className={`send-btn ${inputValue.trim() ? "active" : ""}`}
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="chat-disclaimer">
          Veda may make mistakes. Verify important financial decisions.
        </p>
      </div>
    </div>
  );
}
