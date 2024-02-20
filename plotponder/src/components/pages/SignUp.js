import React from "react";
import "../SignUp.css";

function SignUp(props) {
  return (
    <div className="MacbookPro14CreateAnAccount" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
  <div className="Rectangle77" style={{width: 1395, height: 550, left: 76, top: 195, position: 'absolute', background: '#CEA0AA', borderRadius: 30}} />
  <div className="Frame1" style={{width: 100, height: 100, left: 233, top: 178, position: 'absolute'}} />
  <div className="SignUp" style={{width: 212, height: 85, left: 662, top: 125, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>SIGN UP</div>
    <form>
        <label for="firstname" style={{width: 517, height: 76, left: 187, top: 255, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}> First Name *</label>
        <input type="text" id="firstname" name="firstname" style={{width: 517, height: 76, left: 450, top: 235, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <label for="lastname" style={{width: 517, height: 76, left: 187, top: 355, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}> Last Name *</label>
        <input type="text" id="lastname" name="lastname" style={{width: 517, height: 76, left: 450, top: 335, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <label for="EmailAccount" style={{width: 517, height: 76, left: 187, top: 455, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Email *</label>
        <input type="text" id="emailaccount" name="emailaccount" style={{width: 517, height: 76, left: 450, top: 435, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <label for ="passwordsignup" style={{width: 517, height: 76, left: 187, top: 555, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Password *</label>
        <input type="passwordsignup" id="passwordsignup" name="passwordsignup" style={{width: 517, height: 76, left: 450, top: 535, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <input type="checkbox" id="signupasauthor" name="signupasauthor" value="authorsignup" style={{width: 25, height: 25, left: 600, top: 635, position: 'absolute', background: '#CEA0AA'}}></input>
        <label for="signupasauthor" style={{width: 517, height: 76, left: 650, top: 637, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}> Sign up as Author</label>

        <button for ="signup" style={{width: 517, height: 76, left: 950, top: 800, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Sign Up</button>
    </form>
    </div>

);
}

export default SignUp;