import React, { useState } from "react";
import "../ChangePassword.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import Navbar from "../Navbar";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

function ChangePassword(props) {
  const navigate = useNavigate();
  const [isAccountVerified, setAccountVerified] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleVerifyAccount = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailValue(email);
    setPasswordValue(password);

    // Attempt to sign in
    signInWithEmailAndPassword(userDatabase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "userInfo");
        setAccountVerified(true); // Set account as verified upon successful sign-in
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          window.alert("Invalid password/email or account does not exist");
        } else {
          console.error("Error during sign in:", error);
        }
      });
  };

  const handleChangePass = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // Send password reset email
    sendPasswordResetEmail(userDatabase, email)
      .then(data => {
        alert("Check your email for the password reset link");
        navigate("/");
      })
      .catch(err => {
        alert(err.code);
      });
  };

  return (
    <div className="main-div">
      <Navbar />
      <div className="changepass-form-div">
        <div className="change-pass-title">Change Password</div>
        {!isAccountVerified ? (
          <form onSubmit={(e) => handleVerifyAccount(e)}>
            <input
              type="text"
              className="email"
              name="email"
              placeholder="Enter email"
            ></input>
            <br></br>

            <input
              type="password"
              className="password"
              name="password"
              placeholder="Enter current password"
            ></input>
            <br></br>

            <button>Verify Account</button>
          </form>
        ) : (
          <form onSubmit={(e) => handleChangePass(e)}>
            <input
              type="text"
              className="email"
              name="email"
              
              value={emailValue} // Assuming userEmail is passed as a prop
              readOnly
            ></input>
            <br></br>

            <input
              type="password"
              className="password"
              name="password"
              value={passwordValue} // Assuming userEmail is passed as a prop
              readOnly
            ></input>
            <br></br>

            <button>Change Password</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ChangePassword;
