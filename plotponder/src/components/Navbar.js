import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className="Navbar">
            <NavLink to="/Account" className="view-account" activeclassname="active">View Account</NavLink>
            <NavLink to="/Recommendations" className="recommendations-title" activeclassname="active">Recommendations</NavLink>
            <NavLink to="/Community" className="community" activeclassname="active">Community</NavLink>
            <div className="plotponder-title">PlotPonder 💭</div>
        </div>
    );
};

export default Navbar;
