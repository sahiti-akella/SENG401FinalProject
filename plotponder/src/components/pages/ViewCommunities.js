import React, { useEffect } from 'react';
import "../ViewCommunities.css";

export default function UserAccountsView(props) {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
          <div className="user-accounts-container">
            <div className="section-title">Your Clubs</div>
            <div className="community-item">
              <div className="community-details">
                <div className="community-name">Harry Potter</div>
                <div className="community-creator">Created by: u/[Username]</div>
              </div>
              <div className="leave-button">Leave</div>
              <div className="go-button">Go →</div>
            </div>
            <div className="community-item">
              <div className="community-details">
                <div className="community-name">The Hobbit</div>
                <div className="community-creator">Created by: u/[Username]</div>
              </div>
              <div className="leave-button">Leave</div>
              <div className="go-button">Go →</div>
            </div>
            <div className="section-title">Explore New Clubs</div>
            <div className="community-item">
              <div className="community-details">
                <div className="community-name">The Hunger Games</div>
                <div className="community-creator">Created by: u/[Username]</div>
              </div>
              <div className="go-button">Join +</div>
            </div>
            <div className="community-item">
              <div className="community-details">
                <div className="community-name">The Maze Runner</div>
                <div className="community-creator">Created by: u/[Username]</div>
              </div>
              <div className="go-button">Join +</div>
            </div>
            <div className="create-community-button">Create a New Club</div>
          </div>
        </>
    )
}
