import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SignIn.css";

function SignIn(props) {
  const [signInAsAuthor, setSignInAsAuthor] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setSignInAsAuthor(!signInAsAuthor);
  };

  const handleSignIn = () => {
    // Perform sign-in logic here (User Authentication from database)

    // Navigate to "/Account" after successful sign-in
    navigate("/Account");
  };

  return (
    <div className="MacbookPro14SignIn">
      <div className="Rectangle76" />
      <div className="Frame2" />
      <div className="SignIn">SIGN IN</div>

      <form>
        <label htmlFor="Email">Email *</label>
        <input type="text" id="email" name="email" placeholder="Enter your email"></input>
        <br />

        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          style={{ top: "375px", left: "475px" }}
        ></input>
        <br />

        {signInAsAuthor && (
          <>
            <label htmlFor="optional" style={{ top: "500px" }}>Author Password *</label>
            <input
              type="password"
              id="authorpassword"
              name="authorpassword"
              placeholder="Enter your author password"
            ></input>
            <br />
          </>
        )}

        <input
          type="checkbox"
          id="signInAsAuthorCheckbox"
          className="checkbox2"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="signInAsAuthorCheckbox">Sign in as author</label>

        <button type="button" onClick={handleSignIn} htmlFor="signin">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
