// addbook.js

import React from "react";
import { Link } from 'react-router-dom';
import "../addbook.css";

export default function AddBook(props) {
  const sets = [
    { top: 316 },
    { top: 742 },
  ];

  return (
    <div className="MacbookPro14UserAccount">
      <div className="AvailableBooks" style={{ left: 604, top: 174, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word' }}>Available Books</div>
      
      {sets.map((set, setIndex) => (
        <React.Fragment key={setIndex}>
          {Array.from({ length: 4 }, (_, index) => (
            <React.Fragment key={index}>
              <img
                className={`D707c67aA00a45e98620Dd6352530774${setIndex * 4 + index + 5}`}
                style={{ width: 176, height: 282, left: 318 + (233 * index), top: set.top, position: 'absolute' }}
                src={`https://via.placeholder.com/176x282`}
              />
              <Link to="/Account/AddBook" className="AddBook" style={{left: 320 + (233 * index), top: set.top + 338 }} >
                + Add Book
              </Link>
              
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
