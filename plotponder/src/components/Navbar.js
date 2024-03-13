import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="header">
                <NavLink to="/Home" className="title-wrapper">PlotPonder</NavLink>
                <div className="search-wrapper">   
                    <NavLink to="/Recommendations" className="nav-link" activeClassName="active">Recommendations</NavLink>
                    <NavLink to="/Community" className="nav-link" activeClassName="active">Community</NavLink>
                    <NavLink to="/Account" className="nav-link" activeClassName="active">View Account</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

