import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../animation.json"; // Import your Lottie animation JSON file
import "./Navbar.css";

export const Navbar = () => {
    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="desktop">
            <div className="div">

                <div className="text-wrapper">
                    PlotPonder 💭</div>
                <div className="text-wrapper-2">Welcome to PlotPonder!</div>
                <div className="lottie-animation">
                    <Lottie
                        options={defaultOptions}
                        height={520}
                        width={755}
                        isStopped={isStopped}
                        isPaused={isPaused}
                    />
                </div>
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper-3">Create an Account</div>
                </div>
                <div className="overlap">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-5">Sign In</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
