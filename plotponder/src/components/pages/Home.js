import React from "react";
import Lottie from "react-lottie";
import homepageAnimation from "../../HomepageAnimation.json"; // Import your Lottie animation JSON file
import "../Home.css";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/Account")} className="get-started-button">
      Get Started &#x2192;
    </button>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepage-div">
        <div className="homepage-message">
          <p> Welcome to PlotPonder! </p>
        </div>
        <div className="description">
          PlotPonder is a platform for book lovers to discover new books and TV
          shows, share their thoughts, and connect with other readers. Whether
          you're looking for your next read, want to join a book club, or simply
          want to discuss your favorite books, PlotPonder has you covered. So
          what are you waiting for? Dive into the world of PlotPonder and let
          the adventure begin!
        </div>
        <div className="lottie-box">
          <div className="lottie">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: homepageAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
        </div>
        <div className="button">
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
