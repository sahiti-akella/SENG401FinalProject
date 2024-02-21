// useraccounts.js

import React from "react";
import "../useraccount.css";
import { Link } from 'react-router-dom';

function Account(props) {
  return (
    <div className="MacbookPro14UserAccount">
        <div className="HiUsername">
            Hi [Username]! 👋
        </div>

        <div className="YourRatings">
            Your Ratings
        </div>

        <div className="rating-images">
            <img className="image1" src="https://via.placeholder.com/176x282" />
            <img className="image2" src="https://via.placeholder.com/176x282" />
            <img className="image3" src="https://via.placeholder.com/176x282" />
            <img className="image4" src="https://via.placeholder.com/176x282" />
        </div>

        {/* <div className="Rectangle50" style={{width: 258, height: 62, left: 425, top: 757, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} /> */}

        <Link to="/Account/AddBook" className="AddBook-button" style={{left: 485, top: 772}}>
            + Add Book
        </Link>

        <div className="YourCommunities" style={{left: 1090, top: 303, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>
            Your Communities
        </div>
        
        <Link to="/Account" className="Community1">Romance</Link>
        <Link to="/Account" className="Community2">Comedy</Link>
        <Link to="/Account" className="Community3">Fantasy</Link>


        <Link to="/" className="LogOut">Log Out</Link>
    </div>
  );
}

export default Account;
