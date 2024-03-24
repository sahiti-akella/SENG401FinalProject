import React, { useState, useEffect } from "react";
import "../useraccount.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Navbar from "../Navbar";
import StarRating from "./StarRating";
import axios from "axios";

function Account(props) {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Current User:", user.email);
        const email = user.email;
        const name = user.displayName;
        setDisplayName(name);
        setEmail(email);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchFavoriteBooks(email);
  }, [email]);

  const fetchFavoriteBooks = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/account/favorites/${email}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFavoriteBooks(data);
      } else {
        console.error("Failed to fetch favorite books:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching favorite books:", error);
    }
  };

  const handleRemoveBook = async (bookID, index) => {
    try {
      // Make an API call to remove the book from favorites
      const formData = {
        userEmail: email,
        bookID: bookID,
      };

      const response = await axios.delete(
        `http://localhost:8080/api/v1/account/removeBook/${email}/${bookID}`
      );
      console.log(response);

      console.log("Removing book with ID:", bookID, "at index:", index);
      const updatedBooks = [...favoriteBooks];
      updatedBooks.splice(index, 1);
      setFavoriteBooks(updatedBooks);
      localStorage.removeItem(bookID);
    } catch (error) {
      console.error("Error removing book from favorites:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="MacbookPro14UserAccount">
        <div className="HiUsername">Hi, {displayName}! 👋 </div>
        <div className="account-description">
          To add books to your personal bookshelf, simply click on the "Add
          Books" button to get started. Once clicked, you'll be directed to a
          page where you can search for your favorite books and add them to your
          collection. Whether it's classics, bestsellers, or hidden gems, curate
          your own reading list with ease. Start building your bookshelf and
          discover new literary adventures!
        </div>

        <div className="YourRatings">Your Bookshelf</div>

        {favoriteBooks.map((book, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const top = 450 + row * 450;
          const left = 150 + col * 300;

          return (
            <div className="books">
              <React.Fragment key={index}>
                <img
                  className={`D707c67aA00a45e98620Dd6352530774${index}`}
                  style={{
                    width: 176,
                    height: 282,
                    left: left,
                    top: top,
                    position: "absolute",
                  }}
                  src={book.imageURL}
                />
                <div
                  className="book-title"
                  style={{
                    left: left,
                    top: top + 282 + 20,
                    position: "absolute",
                    fontSize: 15,
                    textAlign: "center",
                    width: 176,
                    fontFamily:
                      "Century Gothic, CenturyGothic, AppleGothic, sans-serif",
                    fontWeight: "bolder",
                  }}
                >
                  {book.bookTitle}
                </div>
                <div
                  className="book-author"
                  style={{
                    left: left,
                    top: top + 282 + 70,
                    position: "absolute",
                    fontSize: 15,
                    textAlign: "center",
                    width: 176,
                    fontFamily:
                      "Century Gothic, CenturyGothic, AppleGothic, sans-serif",
                  }}
                >
                  {book.author}
                </div>
                <div
                  className="book-rating"
                  style={{
                    left: left + 20,
                    top: top + 400,
                    position: "absolute",
                    textAlign: "center",
                    width: 176,
                  }}
                >
                  <StarRating bookKey={book.bookID} defaultRating={localStorage.getItem(book.bookID)}/>
                </div>
                <button
                  style={{
                    left: left + 160,
                    top: top - 10,
                    position: "absolute",
                    background: "#9b8bb5",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={() => handleRemoveBook(book.bookID, index)}
                >
                  {" "}
                  -{" "}
                </button>
              </React.Fragment>
            </div>
          );
        })}

        <Link
          to={{
            pathname: "/Account/AddBook",
            state: { userEmail: email }, // Pass the user email as state
          }}
          className="AddBook-button"
        >
          + Add Books
        </Link>
      </div>
    </div>
  );
}

export default Account;
