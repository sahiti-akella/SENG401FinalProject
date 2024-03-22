import React from "react";
import "../ChangePassword.css";
import { useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import Navbar from "../Navbar";
import { sendPasswordResetEmail } from "firebase/auth";

function ChangePassword(props) {
  const navigate = useNavigate();

  const handleChangePass = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // Send password reset email
    sendPasswordResetEmail(userDatabase, email)
      .then((data) => {
        alert("Check email for password reset link");
        navigate("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="main-div">
      <Navbar />
      <div className="changepass-form-div">
        <div className="change-pass-title">Change Password</div>
        <form onSubmit={(e) => handleChangePass(e)}>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="Enter email"
          ></input>
          <br></br>

          <button>Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
