// addbook.js

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../addbook.css";
import Navbar from "../Navbar";

export default function AddBook(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/book/allData");
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        console.error("Failed to fetch books:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const sets = [
    { top: 316 },
    { top: 742 },
  ];

  return (
    <div> 
      <Navbar />
      <div className="MacbookPro14UserAccount">
      <div className="AvailableBooks" style={{ left: 604, top: 174, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word' }}>Available Books</div>
      
      {books.map((book, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        const top = 300 + (row * 450);
        const left = 150 + (col * 300);
  
        return (
          <React.Fragment key={index}>
            <img
              className={`D707c67aA00a45e98620Dd6352530774${index}`}
              style={{ width: 176, height: 282, left: left, top: top, position: 'absolute' }}
              src={`https://via.placeholder.com/176x282`}
            />
            <div style={{ left: left, top: top + 282 + 20, position: 'absolute', fontSize: 15, textAlign: 'center', width: 176 }}>{book.bookTitle}</div>
            {/* Add Book link */}
            <Link to="/Account/AddBook" className="AddBook" style={{ left: left + 2, top: top + 300 + 20 + 30, position: 'absolute' }}>
              + Add Book
            </Link>
          </React.Fragment>
        );
      })}
    </div>
    </div>
   
  );  
}
