import React from "react";
import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';

function SignIn(props) {
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

  return (
    <div className="main-div">
      <div className="header">
        <div className="title-wrapper">PlotPonder</div>
      </div>
      <div className="signin-form-div">
        <div className="signin-title">Sign In</div>
        <form className="signin-form" onSubmit={(e) => handleSignIn(e)}>
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

          <p className="forgot-pass">
            <Link to="/ChangePassword">Forgot Password?</Link>
          </p>
          <button className="button-signin">Sign In</button>
        </form>
        <p className="switch-signin">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
