import React from "react";
import "../ChangePassword.css";
import { Link, useNavigate } from "react-router-dom";
import { userDatabase } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from "../Navbar";
import { sendPasswordResetEmail } from "firebase/auth";

function ChangePassword(props) {
  const navigate = useNavigate();

  const handleChangePass = async(e)=>{
    e.preventDefault()
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(userDatabase,emalVal).then(data=>{
        alert("Check your gmail")
        navigate("/")
    }).catch(err=>{
        alert(err.code)
    })
}

  return (
    <div className="main-div">
      <Navbar />
      <div className="changepass-form-div">
        <div className="change-pass-title">Change Password</div>
        <form onSubmit={(e) => handleChangePass(e)}>
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

          <button>Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
