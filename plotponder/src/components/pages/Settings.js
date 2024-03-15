import React from "react";
import Navbar from "../Navbar";
import "../Settings.css";

function Settings() {
  return (
    <div className="settings-container">
      <Navbar />  {/* Render the navbar */}

      <div className="settings-content">
        <div className="settings-title">Settings</div>

        <div className="settings-sections">
          <div className="change-email-container">
            <h2>Change Email</h2>
            <form>
              <div className="email-input">
                <label htmlFor="oldEmail">Old Email:</label>
                <input type="email" id="oldEmail" required />
              </div>
              <div className="email-input">
                <label htmlFor="newEmail">New Email:</label>
                <input type="email" id="newEmail" required />
              </div>
              <button type="submit" className="update-button">Update</button>
            </form>
          </div>

          <div className="change-password-container">
            <h2>Change Password</h2>
            <form>
              <div className="password-input">
                <label htmlFor="oldPassword">Old Password:</label>
                <input type="password" id="oldPassword" required />
              </div>
              <div className="password-input">
                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" required />
              </div>
              <button type="submit" className="update-button">Update</button>
            </form>
          </div>
        </div>

        <div className="actions">
          <button className="sign-out-button">Sign Out</button>
          <button className="delete-account-button">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
