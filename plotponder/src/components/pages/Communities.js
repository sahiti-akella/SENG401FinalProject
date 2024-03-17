import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import CommunityPage from './CommunityPage';
import '../Communities.css';
import axios from 'axios';

const Communities = ({ addCommunity }) => {
  const [communities, setCommunities] = useState([]);
  const [newCommunityTitle, setNewCommunityTitle] = useState('');
  const initialExploreCommunities = ['Harry Potter', 'Percy Jackson', 'Lord of the Rings', 'The Hobbit'];

  useEffect(() => {
    // Fetch all communities from the API
    fetchAllCommunities();
  }, []);

  const fetchAllCommunities = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/community/allData');
      if (response.ok) {
        const data = await response.json();
        setCommunities(data);
      } else {
        console.error('Failed to fetch communities');
      }
    } catch (error) {
      console.error('Error fetching communities:', error);
    }
  };

  /*useEffect(() => {
    // Retrieve communities from local storage on component mount
    const storedCommunities = JSON.parse(localStorage.getItem('communities')) || [];
    setCommunities(storedCommunities);
  }, []);

  useEffect(() => {
    // Save communities to local storage whenever the communities state changes
    localStorage.setItem('communities', JSON.stringify(communities));
  }, [communities]);
*/
  const handleCreateCommunity = async () => {
    if (newCommunityTitle.trim() !== '') {
      const formData = new FormData();
      formData.append('topic', newCommunityTitle);
      formData.append('yearMade', new Date().getFullYear());
      console.log(newCommunityTitle)

      try {
        const response = await axios.post('http://localhost:8080/api/v1/community/addCommunity', formData);
        if (response.status === 200) {
          // Refresh communities after creating a new one
          fetchAllCommunities();
          setNewCommunityTitle('');
        } else {
          console.error('Failed to create community');
        }
      } catch (error) {
        console.error('Error creating community:', error);
      }
    }
  };

  /*const handleDeleteCommunity = (communityToDelete) => {
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
    
  };*/


  const exploreCommunities = initialExploreCommunities.filter(community => !communities.includes(community));

  // After fetching and filtering clubs
  const yourClubsSection = communities.slice(0, 2); // Extract first two clubs from "Your Clubs"
  const exploreSection = initialExploreCommunities.slice(0, 2); // Extract first two clubs from "Explore"

  return (
    <div>
      <Navbar />
      <div className="section-title">Explore Clubs</div>
      <div className="community-item">
        {communities.length === 0 ? (
          <div className="no-clubs-message">Create a Club Below, or Join a Club from the Explore Section</div>
        ) : (
          <div className="community-details">
            {communities.map((community, index) => (
              <div key={index} className="community-entry">
                <Link to={`/community/${community.topic}`} className="community-link">
                    {community.topic}
                </Link>
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

    </div>
  );
};

export default Communities;
