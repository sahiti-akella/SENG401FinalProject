import React from "react";
import "../SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import axios from "axios";
import Swal from 'sweetalert2';

function SignUp(props) {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;

    const formData = {
      username: username,
      email: email,
    };
    console.log(formData);
    
    try {
      // Attempt to create a new user
      const userCredential = await createUserWithEmailAndPassword(
        userDatabase,
        email,
        password
      );

      // Update the display name
      const user = userCredential.user;
      console.log(user, "userInfo");
      await updateProfile(user, { displayName: username });

      console.log("Display name updated successfully");

      // add user account to database
      const response = await axios.post(
        `http://localhost:8080/api/v1/account/signup`,
        formData
      );
      console.log(response);

      if (response.status === 201) {
        console.log("User signed up successfully");
        navigate("/SignIn");
      } else {
        console.error("Failed to sign up user");
        // Handle failure case (e.g., display an error message)
      }

      //navigate("/Account");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email is already in use. Redirecting to sign-in page.',
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/SignIn");
          }
        });        
      } else if (error.code === "auth/invalid-email") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a valid email.',
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        });
      } else if (error.code === "auth/weak-password") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a password with 6+ characters.',
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        });
      } else {
        console.error("Error during sign up:", error);
      }
       
    }
  };

  return (
    <div className="main-div">
      <div className="header">
        <div className="title-wrapper">PlotPonder</div>
      </div>
      <div className="signup-form-div">
        <div className="signup-title">Sign Up</div>
        <form className="signup-form" onSubmit={(e) => handleSignUp(e)}>
          <input
            type="text"
            className="username"
            name="username"
            placeholder="Username"
          ></input>
          <br></br>

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

          <button className="button-signup">Sign Up</button>
        </form>
        <p className="switch-signup">
          Already have an account? <Link to="/SignIn">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
