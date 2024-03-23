import React from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";
import BasicMenu from "../BasicMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="heading">
        <div className="search-wrapper">
          <NavLink to="/Homepage" className="nav-link-title">
            PlotPonder
          </NavLink>
          <NavLink
            to="/Homepage"
            className="nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/Recommendations"
            className="nav-link"
            activeClassName="active"
          >
            Recommendations
          </NavLink>
          <NavLink
            to="/AddBook"
            className="nav-link"
            activeClassName="active"
          >
            Explore Books
          </NavLink>
          <NavLink
            to="/Community"
            className="nav-link"
            activeClassName="active"
          >
            Explore Clubs
          </NavLink>
          <NavLink to="/Bookshelf" className="nav-link" activeClassName="active">
            Account
          </NavLink>
          <BasicMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
