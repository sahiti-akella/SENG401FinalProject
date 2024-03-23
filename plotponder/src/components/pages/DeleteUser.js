import React, { useState } from "react";
import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';
import Navbar from "../Navbar";

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
            console.log("User Account Deleted Successfully");
            
            navigate("/")
            Swal.fire({
              icon: 'success',
              title: 'PlotPonder Team Will Miss You',
              text: 'User Account Deleted Successfully',
              confirmButtonText: 'Okay',
              customClass: {
                confirmButton: 'swal-confirm-button',
              },
            });  
        })
        .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Unable to delete atm.',
              confirmButtonText: 'Okay',
              customClass: {
                confirmButton: 'swal-confirm-button',
              },
            });  
        });

      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid password/email or account does not exist.',
            confirmButtonText: 'Okay',
            customClass: {
              confirmButton: 'swal-confirm-button',
            },
          });  
        } else {
          console.error("Error during sign in:", error);
        }
      });
  };
 
    
  return (
    <div className="main-div">
      <Navbar />
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
