import React, { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import bookBotAnimation from "../../Bookbot.json";
import Navbar from "./Navbar";
import "../BookBot.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8020/chat", { prompt });
      setResponse(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="welcome-page">
        <div className="welcome-message">
          <h2 className="welcome">Welcome to BookBot</h2>
          <button onClick={() => navigate("/Recommendations")} className="back-to-recommendations">
            {"\u2190"} Go Back
          </button>
        </div>
        <div className="bookbot-description">
          Discover your next literary obsession with BookBot, your ultimate
          guide to personalized book and TV show recommendations! Simply enter a
          book name, and let BookBot work its magic, delivering tailored
          recommendations in seconds.
        </div>
      </div>
      <div className="chat-container">
        <div className="lottie-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: bookBotAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={window.innerHeight / 2} // Adjust height to take up half of the bottom half of the page
            width="100%"
          />
        </div>
        <div className="prompt-response-container">
          <p>BookBot's Recommendations:</p>
          <div>
            <div className="chatgpt-response"></div>
            <p>{response}</p>
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="prompt-input"
              placeholder="Enter Book Name for Recommendations......"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookBot;
