import React from "react";
import "../SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Perform sign-in logic here (Adding User to Database, sending author password if indicated)

    // Navigate to "/Account" after successful sign-in
    navigate("/Account");
  };

  return (
    <div className="MacbookPro14CreateAnAccount">
      <div className="Rectangle77" />
      <div className="Frame1"/>
      <div className="SignUp">SIGN UP</div>
        <form>
            <label for="firstname"> First Name *</label>
            <input type="text" id="firstname" name="firstname" style={{top: 235}}></input>
            <br></br>

            <label for="lastname"> Last Name *</label>
            <input type="text" id="lastname" name="lastname" style={{top: 335}}></input>
            <br></br>

            <label for="EmailAccount">Email *</label>
            <input type="text" id="emailaccount" name="emailaccount" style={{top: 435}}></input>
            <br></br>

            <label for ="passwordsignup">Password *</label>
            <input type="password" id="passwordsignup" name="passwordsignup" style={{top: 535}}></input>
            <br></br>

            <input type="checkbox" id="signupasauthor" name="signupasauthor" value="authorsignup"></input>
            <label for="signupasauthor"> Sign up as Author</label>

            <p className="authorSignUpMessage">*When you sign up as an author, an author password will be sent to you via email. Use this password for future sign in's.*</p>

            <button for ="signup" type="button" onClick={handleSignUp}>Sign Up</button>
        </form>
    </div>

);
}

export default SignUp;