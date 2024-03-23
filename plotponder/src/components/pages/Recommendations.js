import React, { useState, useEffect } from "react";
import "../Recommendations.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Recommendations(props) {
  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  const fetchRandomBooks = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/book/random/3"
      );
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
        <div className="user-rec-title">Your Recommendations</div>
        <div className="rec-description">
          <div className="rec-text">
            Dive in and explore the world of literature! And for
            personalized recommendations tailored to your preferences, don't
            hesitate to consult our BookBot—it's equipped to help you discover
            your next favorite book! Happy reading!
          </div>
          <Link to="/Recommendations/BookBot" className="ask-bookbot">
            Ask BookBot &#x2192;
          </Link>
        </div>

        <div className="books">
          {randomBooks.map((book, index) => (
            <div key={index} className="Recommendation">
              <div className="rectangle-rec">
                <img
                  className="book-image"
                  src={book.imageURL}
                  alt="Book Cover"
                />
                <div className="book-title">{book.bookTitle}</div>
                <div className="author">{book.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
