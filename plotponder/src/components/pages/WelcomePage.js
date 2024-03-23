import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../animation.json"; // Import your Lottie animation JSON file
import "../WelcomePage.css";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main-div">
      <div className="header">
        <div className="nav-link-title">PlotPonder</div>
      </div>
      <div className="welcome-wrapper">Welcome to PlotPonder..</div>
      <div className="lottie-animation">
        <Lottie
          options={defaultOptions}
          height="60%"
          width="60%"
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
      <button onClick={() => navigate("/SignUp")} className="signup-button">
        Sign Up
      </button>

      <button onClick={() => navigate("/SignIn")} className="signin-button">
        Sign In
      </button>
    </div>
  );
};

export default WelcomePage;
