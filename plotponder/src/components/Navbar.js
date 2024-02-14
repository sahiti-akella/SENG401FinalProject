import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../animation.json"; // Import your Lottie animation JSON file
import "./Navbar.css";

export const Navbar = () => {

    return (
        <div className="desktop">
            <div className="div">
                <div className="text-wrapper">
                    PlotPonder 💭
                </div>
            </div>
        </div>
    );
};

export default Navbar;
