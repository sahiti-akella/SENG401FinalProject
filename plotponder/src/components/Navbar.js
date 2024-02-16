import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className="Navbar">
            <NavLink to="/Account" className="view-account" activeClassName="active">View Account</NavLink>
            <NavLink to="/Recommendations" className="recommendations-title" activeClassName="active">Recommendations</NavLink>
            <NavLink to="/Community" className="community" activeClassName="active">Community</NavLink>
            <div className="plotponder-title">PlotPonder 💭</div>
        </div>
    );
};

export default Navbar;
