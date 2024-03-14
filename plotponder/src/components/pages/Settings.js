// Settings.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../Settings.css";
import Navbar from "../Navbar";
import { signOut, getAuth } from "firebase/auth";
import { userDatabase } from "./FirebaseConfig";
import axios from "axios";

function Settings() {
  // Your state variables and useEffect can go here if needed

  return (
    <div className="MacbookPro14Settings" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
      <div className="ViewAccount" style={{left: 1306, top: 52, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>View Account</div>
      <div className="Recommendations" style={{left: 1058, top: 53, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Recommendations</div>
      <div className="Recommendations" style={{left: 1058, top: 53, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Recommendations</div>
      <div className="Community" style={{left: 853, top: 51, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Community</div>
      <div className="Plotponder" style={{left: 68, top: 37, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>PlotPonder 💭</div>
      <div className="Settings" style={{left: 68, top: 230, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>Settings</div>
      <div className="Settings" style={{width: 138, height: 23, left: 1310, top: 91, position: 'absolute', color: '#420F1A', fontSize: 22, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>Settings</div>
      <div className="ChangeEmail" style={{width: 267, height: 28, left: 68, top: 277, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>Change Email</div>
      <div className="ChangeEmail" style={{width: 267, height: 28, left: 68, top: 277, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>Change Email</div>
      <div className="ChangePassword" style={{width: 406, height: 28, left: 652, top: 285, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '700', wordWrap: 'break-word'}}>Change Password</div>
      <div className="Rectangle60" style={{width: 292, height: 106, left: 68, top: 438, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} />
      <div className="Rectangle62" style={{width: 292, height: 106, left: 642, top: 669, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} />
      <div className="Rectangle63" style={{width: 292, height: 106, left: 642, top: 438, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} />
      <div className="Rectangle61" style={{width: 292, height: 106, left: 68, top: 677, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}} />
      <div className="OldEMail" style={{width: 183, height: 21, left: 68, top: 369, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Old e-mail</div>
      <div className="NewEMail" style={{width: 236, height: 34, left: 72, top: 614, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>New e-mail</div>
      <div className="OldPassword" style={{width: 311, height: 32, left: 649, top: 373, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Old Password</div>
      <div className="NewPassword" style={{width: 268, height: 41, left: 643, top: 609, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>New Password</div>
      <div className="Update" style={{width: 294, height: 58, left: 66, top: 820, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Update</div>
      <div className="Update" style={{width: 294, height: 68, left: 640, top: 810, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Update</div>
      <div className="Rectangle78" style={{width: 307, height: 99, left: 1141, top: 438, position: 'absolute', background: '#D9D9D9'}} />
      <div className="SignOut" style={{width: 226, height: 32, left: 1175, top: 459, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Sign - out</div>
      <div className="Rectangle79" style={{width: 314, height: 105, left: 1134, top: 670, position: 'absolute', background: '#D9D9D9'}} />
      <div className="DeleteAccount" style={{width: 273, height: 61, left: 1155, top: 691, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Delete Account</div>
    </div>
  );
}

export default Settings;
