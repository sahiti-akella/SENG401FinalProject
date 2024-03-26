import React from "react";
import "../ChangePassword.css";
import { useNavigate, useLocation } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from 'sweetalert2';
import Navbar from "./Navbar";

function ChangePassword(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Extracting the state from location
  const fromSignIn = location.state ? location.state.fromSignIn : true;

  const showNavbar = fromSignIn && location.pathname !== "/SignIn/ChangePassword";

  console.log(location.pathname);
  console.log(showNavbar)
  console.log(fromSignIn); 

  const handleChangePass = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // Send password reset email
    sendPasswordResetEmail(userDatabase, email)
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Sent',
          text: 'Check email for password reset link',
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });      
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="main-div">
      {showNavbar ? (
        <Navbar />
      ) : (
        <div className="header">
          <div className="title-wrapper">Plotponder</div>
        </div>
      )}
      <div className="changepass-form-div">
        <div className="change-pass-title">Change Password</div>
        <form className="change-pass-form" onSubmit={(e) => handleChangePass(e)}>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="Enter email"
          ></input>
          <br></br>

          <button className="change-pass-button">Send Link</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
