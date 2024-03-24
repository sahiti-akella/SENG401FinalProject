import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../StarRating.css";

const StarRating = ({ bookKey, defaultRating, userEmail }) => {
  const [rating, setRating] = useState(defaultRating || null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating_${userEmail}_${bookKey}`);
    setRating(storedRating || defaultRating || null);
  }, [bookKey, userEmail]); // Re-render when bookKey changes

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    localStorage.setItem(`rating_${userEmail}_${bookKey}`, ratingValue);
  };

  return (
    <div className="app">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name={`rating_${userEmail}_${bookKey}`}
              value={ratingValue}
              className="radiob"
              onClick={() => handleClick(ratingValue)}
              checked={rating === ratingValue} // Check if rating matches ratingValue
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#85878c"}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
