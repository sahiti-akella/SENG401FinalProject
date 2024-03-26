import React from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";
import BasicMenu from "./BasicMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="heading">
        <NavLink to="/Homepage" className="title-wrapper">
          PlotPonder
        </NavLink>
        <div className="search-wrapper">
          <NavLink
            to="/Recommendations"
            className="nav-link"
            activeClassName="active"
          >
            Recommendations
          </NavLink>
          <NavLink
            to="/AddBooks"
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
            Bookshelf
          </NavLink>
          <BasicMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
