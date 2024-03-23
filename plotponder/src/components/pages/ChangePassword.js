import React from "react";
import "../ChangePassword.css";
import { useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import Navbar from "./Navbar";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from 'sweetalert2';

function ChangePassword(props) {
  const navigate = useNavigate();

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
      <Navbar />
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
