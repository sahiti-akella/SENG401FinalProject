import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import CommunityPage from './CommunityPage';
import '../Communities.css';

const Communities = ({ addCommunity }) => {
    const [communities, setCommunities] = useState(() => {
        const storedCommunities = JSON.parse(localStorage.getItem('communities')) || [];
        return storedCommunities;
      });
  const [newCommunityTitle, setNewCommunityTitle] = useState('');
  const initialExploreCommunities = ['Harry Potter', 'Percy Jackson', 'Lord of the Rings', 'The Hobbit'];

  useEffect(() => {
    // Retrieve communities from local storage on component mount
    const storedCommunities = JSON.parse(localStorage.getItem('communities')) || [];
    setCommunities(storedCommunities);
  }, []);

  useEffect(() => {
    // Save communities to local storage whenever the communities state changes
    localStorage.setItem('communities', JSON.stringify(communities));
  }, [communities]);

  const handleCreateCommunity = () => {
    if (newCommunityTitle.trim() !== '') {
      if (communities.includes(newCommunityTitle)) {
        alert(`Club "${newCommunityTitle}" is already created.`);
      } else {
        setCommunities(prevCommunities => [...prevCommunities, newCommunityTitle]);
        setNewCommunityTitle('');
      }
    }
  };

  const handleDeleteCommunity = (communityToDelete) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete/leave ${communityToDelete}?`);
    if (confirmDelete) {
      setCommunities(prevCommunities =>
        prevCommunities.filter((community) => community !== communityToDelete)
      );
    }
  };

  const handleJoinLeaveCommunity = (community) => {
    let updatedCommunities;
    if (!communities.includes(community)) {
      // Join the club
      updatedCommunities = [...communities, community];
    } else {
      // Leave the club
      updatedCommunities = communities.filter((existingCommunity) => existingCommunity !== community);
    }
  
    // Update the state
    setCommunities(updatedCommunities);
  
    // Update local storage
    localStorage.setItem('communities', JSON.stringify(updatedCommunities));
    
  };


  const exploreCommunities = initialExploreCommunities.filter(community => !communities.includes(community));

  // After fetching and filtering clubs
  const yourClubsSection = communities.slice(0, 2); // Extract first two clubs from "Your Clubs"
  const exploreSection = initialExploreCommunities.slice(0, 2); // Extract first two clubs from "Explore"

  return (
    <div>
      <Navbar />
      <div className="section-title">Your Clubs</div>
      <div className="community-item">
        {communities.length === 0 ? (
          <div className="no-clubs-message">Create a Club Below, or Join a Club from the Explore Section</div>
        ) : (
          <div className="community-details">
            {communities.map((community) => (
              <div key={community} className="community-entry">
                <Link to={`/community/${community}`} className="community-link">
                    {community}
                </Link>
                <button className="delete-button" onClick={() => handleDeleteCommunity(community)}>
                  Delete/Leave 🗑
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <input
        type="text"
        className="create-community-title"
        value={newCommunityTitle}
        onChange={(e) => setNewCommunityTitle(e.target.value)}
        placeholder="Enter new community title"
      />
      <button className="create-community-button" onClick={handleCreateCommunity}>
        Create new community
      </button>

      {/* Explore Communities Section */}
      <div className="section-title">Explore</div>
      <div className="community-item">
        {exploreCommunities.map((community) => (
          <div key={community} className="explore-link">
            {community}
            <button className="join-button" onClick={() => handleJoinLeaveCommunity(community)}>
              Join +
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Communities;