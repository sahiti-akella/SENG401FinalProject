import React from "react";
import "../ChangeEmail.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from "../Navbar";

function ChangeEmail(props) {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Attempt to create a new user
    signInWithEmailAndPassword(userDatabase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "userInfo");
        navigate("/Home");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          window.alert("Invalid password/email or account does not exist");
        } else {
          console.error("Error during sign in:", error);
        }
      });
  };

  return (
    <div className="main-div">
     <Navbar />
      <div className="changeemail-form-div">
        <div className="change-email-title">Change Email</div>
        <form onSubmit={(e) => handleSignIn(e)}>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="Email"
          ></input>
          <br></br>

          <input
            type="password"
            className="password"
            name="password"
            placeholder="Password"
          ></input>
          <br></br>

          <button>Sign In</button>
        </form>
        <p className="switch-signin">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default ChangeEmail;
