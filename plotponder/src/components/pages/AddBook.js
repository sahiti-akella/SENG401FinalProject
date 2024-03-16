// addbook.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../addbook.css";
import Navbar from "../Navbar";
import { signOut, getAuth } from "firebase/auth";
import { userDatabase } from "./FirebaseConfig";
import axios from "axios";

export default function AddBook() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Current User:", user.email);
        const email = user.email
        const name = user.displayName;
        setDisplayName(name);
        setEmail(email)
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(email)

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/book/allData");
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); 
      } else {
        console.error("Failed to fetch books:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddBook = async (bookID) => {
    const formData = {
      bookID: bookID,
      userEmail: email
    };
    console.log(formData)

    try {
      // add user account to database
      const response = await axios.post(`http://localhost:8080/api/v1/account/addBook`, formData);
      console.log(response);

      if (response.status === 201) {
        console.log("Book added successfully");
        // You may want to update state or do some other action upon success
      } else {
        console.error("Failed to add book:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = books.filter(book => book.bookTitle.toLowerCase().includes(query));
    setFilteredBooks(filtered);
  };

  const sets = [
    { top: 316 },
    { top: 742 },
  ];

  return (
    <div> 
      <Navbar />
      <div className="MacbookPro14UserAccount">
      <div className="available-books">Available Books</div>
        <input className="search-bar"
            type="text"
            placeholder="Search Books..."
            value={searchQuery}
            onChange={handleSearch}
          />

        {filteredBooks.map((book, index) => {
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
            <button onClick={() => handleAddBook(book.bookID)} className="AddBook" style={{ left: left + 2, top: top + 300 + 20 + 30, position: 'absolute' }}>
              + Add Book
            </button>
          </React.Fragment>
        );
      })}
    </div>
    </div>
   
  );  
}
