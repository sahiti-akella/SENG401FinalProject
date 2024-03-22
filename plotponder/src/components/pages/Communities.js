import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../Communities.css";
import axios from "axios";
import Lottie from "react-lottie";
import communityAnimation from "../../Community.json";

const Communities = ({ addCommunity }) => {
  const [communities, setCommunities] = useState([]);
  const [newCommunityTitle, setNewCommunityTitle] = useState("");
  const initialExploreCommunities = [
    "Harry Potter",
    "Percy Jackson",
    "Lord of the Rings",
    "The Hobbit",
  ];

  useEffect(() => {
    // Fetch all communities from the API
    fetchAllCommunities();
  }, []);

  const fetchAllCommunities = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/community/allData"
      );
      if (response.ok) {
        const data = await response.json();
        setCommunities(data);
      } else {
        console.error("Failed to fetch communities");
      }
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  const handleCreateCommunity = async () => {
    if (newCommunityTitle.trim() !== "") {
      const formData = new FormData();
      formData.append("topic", newCommunityTitle);
      formData.append("yearMade", new Date().getFullYear());
      console.log(newCommunityTitle);

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/community/addCommunity",
          formData
        );
        if (response.status === 200) {
          // Refresh communities after creating a new one
          fetchAllCommunities();
          setNewCommunityTitle("");
        } else {
          console.error("Failed to create community");
        }
      } catch (error) {
        console.error("Error creating community:", error);
      }
    }
  };

  const exploreCommunities = initialExploreCommunities.filter(
    (community) => !communities.includes(community)
  );

  // After fetching and filtering clubs
  const yourClubsSection = communities.slice(0, 2); // Extract first two clubs from "Your Clubs"
  const exploreSection = initialExploreCommunities.slice(0, 2); // Extract first two clubs from "Explore"

  return (
    <div>
      <Navbar />
      <div className="section-title">Explore Clubs</div>
      <div className="community-description">
        <p>
          Discover, join, and create new communities to discuss your favorite
          books with other readers!
        </p>
      </div>
      <div className="join-community">
        <h1> Join an Existing community</h1>
      </div>

      <div className="community-container">
        <div className="community-item">
          {communities.length === 0 ? (
            <div className="no-clubs-message">
              Create a Club Below, or Join a Club from the Explore Section
            </div>
          ) : (
            <div className="community-details">
              {communities.map((community, index) => (
                <div key={index} className="community-entry">
                  <Link
                    to={`/community/${community.topic}`}
                    className="community-link"
                  >
                    {community.topic} &nbsp; <span>&#x2192;</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="create-community-section">
          <div className="create-community-description">
            <h1> Or Create a New Community</h1>
          </div>
          <input
            type="text"
            className="create-community-title"
            value={newCommunityTitle}
            onChange={(e) => setNewCommunityTitle(e.target.value)}
            placeholder="Enter new community title.."
          />
          <button
            className="create-community-button"
            onClick={handleCreateCommunity}
          >
            Create
          </button>
          <div className="community-lottie">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: communityAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={window.innerHeight / 2} // Adjust height to take up half of the bottom half of the page
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
