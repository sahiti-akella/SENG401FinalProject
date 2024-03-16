import React, { useState, useEffect } from "react";
import "../useraccount.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { userDatabase } from "./FirebaseConfig";
import Navbar from "../Navbar";

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
        const email = user.email
        const name = user.displayName;
        setDisplayName(name);
        setEmail(email)
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchFavoriteBooks(email);
  }, [email]);

  const fetchFavoriteBooks = async (email) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/account/favorites/${email}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setFavoriteBooks(data);
      } else {
        console.error("Failed to fetch favorite books:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching favorite books:", error);
    }
  };

  const handleSignOut = () => {
    signOut(userDatabase).then((val) => {
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar />
      <div className="MacbookPro14UserAccount">
      <div className="HiUsername">Hi, {displayName}! 👋</div>

      <div className="YourRatings">Your Favourites</div>

      {favoriteBooks.map((book, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const top = 400 + (row * 450);
        const left = 150 + (col * 300);

        return (
          <React.Fragment key={index}>
            <img
              className={`D707c67aA00a45e98620Dd6352530774${index}`}
              style={{ width: 176, height: 282, left: left, top: top, position: 'absolute' }}
              src={`https://via.placeholder.com/176x282`}
            />
            <div style={{ left: left, top: top + 282 + 20, position: 'absolute', fontSize: 15, textAlign: 'center', width: 176 }}>{book.bookTitle}</div>
          </React.Fragment>
        );
      })}

      {/* <div className="Rectangle50" style={{width: 258, height: 62, left: 425, top: 757, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} /> */}

      <Link
        to={{
          pathname: "/Account/AddBook",
          state: { userEmail: email } // Pass the user email as state
        }}
        className="AddBook-button"
      >
        + Add Book
      </Link>

      <div 
        className="Settings" 
        style={{
          left: 1350,
          top: 20,
          position: "absolute",
          color: "black",
          fontSize: 36,
          fontFamily: "Inika",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Settings
      </div>

      <div
        className="YourCommunities"
        style={{
          left: 1090,
          top: 303,
          position: "absolute",
          color: "black",
          fontSize: 36,
          fontFamily: "Inika",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Your Communities
      </div>

      <Link to="/Account" className="Community1">
        Romance
      </Link>
      <Link to="/Account" className="Community2">
        Comedy
      </Link>
      <Link to="/Account" className="Community3">
        Fantasy
      </Link>
    </div>
    </div>
    
  );
}

export default Account;
