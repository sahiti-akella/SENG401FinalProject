import React, { useState } from "react";
import "../DeleteUser.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';
import Navbar from "./Navbar";
import axios from 'axios';

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
            handleDeleteUser(email)

            navigate("/")
            Swal.fire({
              icon: 'success',
              title: 'We Will Miss You...',
              text: 'User Account Deleted Successfully',
              confirmButtonText: 'Okay',
              confirmButtonColor: '#488282',
            });  
        })
        .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Unable to delete at the moment.',
              confirmButtonText: 'Okay',
              confirmButtonColor: '#488282',
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
            confirmButtonColor: '#488282',
          });  
        } else {
          console.error("Error during sign in:", error);
        }
      });
  };

  const handleDeleteUser = async (email) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/account/delete/${email}`
      );
      console.log(response);

      console.log("Deleting user with email:", email);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
    
  return (
    <div className="main-div">
      <Navbar />
      <div className="delete-form-div">
        <div className="delete-title">Delete Account</div>
        <form className="delete-form" onSubmit={(e) => handleSignIn(e)}>
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
          <button className="button-delete">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
