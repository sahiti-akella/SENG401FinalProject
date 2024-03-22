import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import BasicMenu from './BasicMenu';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="heading">
                <NavLink to="/Home" className="title-wrapper">PlotPonder</NavLink>
                <div className="search-wrapper">   
                    <NavLink to="/Recommendations" className="nav-link" activeClassName="active">Recommendations</NavLink>
                    <NavLink to="/Account/AddBook" className="nav-link" activeClassName="active">Explore Books</NavLink>
                    <NavLink to="/Community" className="nav-link" activeClassName="active">Explore Clubs</NavLink>
                    <NavLink to="/Account" className="nav-link" activeClassName="active">Account</NavLink>
                    <BasicMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

