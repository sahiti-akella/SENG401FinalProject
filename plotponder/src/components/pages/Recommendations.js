import React from "react";
import "../Recommendations.css";
import { Link } from 'react-router-dom';

function Recommendations(props) {
  return (
    <div className="recommendations-container">
      
      <div className="user-rec-title">User's Recommendations</div>

      <div className="Recommendation">
        <div className="rectangle-rec" />
        <img className="book-image" src="https://via.placeholder.com/176x282" alt="Book Cover" />
        <div className="book-title">Percy Jackson and the Olympians: The Lightning Thief</div>
        <div className="author">Rick Riordan</div>
      </div>


      <Link to="/Recommendations/BookBot" className="ask-bookbot">Ask Our BookBot!</Link>
    </div>
  );
}

export default Recommendations;
