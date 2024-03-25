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
      }

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email is already in use. Redirecting to sign-in page.',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#488282',
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
          confirmButtonColor: '#488282',
        });
      } else if (error.code === "auth/weak-password") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a password with 6+ characters.',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#488282',
        });
      } else {
        console.error("Error during sign up:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="header">
          <div className="title-wrapper">PlotPonder</div>
        </div>
          <div className="card signup-form-div">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>

              <form className="signup-form justify-content-center"  onSubmit={(e) => handleSignUp(e)}>
                <div className="mb-3 text-center">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3 text-center">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 text-center">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/SignIn">Sign in</Link>
                </p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
