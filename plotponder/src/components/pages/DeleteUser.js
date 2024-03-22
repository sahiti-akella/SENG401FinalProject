import React, { useState } from "react";
import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function DeleteUser(props) {
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
       

        user
        .delete()
        .then(() => {
            // User deleted.
            console.log("User Account Deleted Successful");
            window.alert("User Account Deleted Successful");
            navigate("/")
        })
        .catch((error) => {
            window.alert("Unable to delete atm");
        });

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
      <div className="header">
        <div className="title-wrapper">PlotPonder</div>
      </div>
      <div className="signin-form-div">
        <div className="signin-title">Verify Delete</div>
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
          <button className="button-signin">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
