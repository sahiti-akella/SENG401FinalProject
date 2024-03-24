import React,  { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../StarRating.css";


const StarRating = (item) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const defaultVal = item.defaultRating;
  

  return (
<>

    <div className="app">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="radiob"
              value={ratingValue}
              onClick={() => {setRating(ratingValue); localStorage.setItem(item.bookKey, ratingValue); }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating || defaultVal) ? "#ffc107" : "#e4e5e9"}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
         
        );
      })}
    </div>
    </>
  );
};

export default StarRating;