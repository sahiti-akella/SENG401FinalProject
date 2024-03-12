import React, { useState, useEffect } from "react";
import "../Recommendations.css";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

function Recommendations(props) {

  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  const fetchRandomBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/book/random/3");
      if (response.ok) {
        const data = await response.json();
        setRandomBooks(data);
      } else {
        console.error("Failed to fetch random books:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching random books:", error);
    }
  };

  return (
    <div> 
      <Navbar />
      <div className="recommendations-container">
      <div className="user-rec-title">User's Recommendations</div>
      <div className="books">
      {randomBooks.map((book, index) => (
        <div key={index} className="Recommendation">
          <div className="rectangle-rec" />
          <img className="book-image" src={`https://via.placeholder.com/176x282`} alt="Book Cover" />
          <div className="book-title">{book.bookTitle}</div>
          <div className="author">{book.author}</div>
        </div>
      ))}
      </div>
      
      <Link to="/Recommendations/BookBot" className="ask-bookbot">Ask Our BookBot!</Link>
    </div>
      
    </div>
   
  );
}

export default Recommendations;
