import React from "react";
import "../SignIn.css";

function SignIn(props) {
  return (
    <div className="MacbookPro14SignIn" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
  <div className="Rectangle76" style={{width: 1395, height: 550, left: 76, top: 195, position: 'absolute', background: '#CEA0AA', borderRadius: 30}} />
  <div className="Frame2" style={{width: 100, height: 100, left: 233, top: 178, position: 'absolute'}} />
  <div className="SignIn" style={{width: 212, height: 85, left: 662, top: 125, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>SIGN IN</div>
    <form>

        <label for="Email" style={{width: 517, height: 76, left: 187, top: 255, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Email *</label>
        <input type="text" id="email" name="email" style={{width: 517, height: 76, left: 450, top: 235, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <label for ="password" style={{width: 517, height: 76, left: 187, top: 355, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Password *</label>
        <input type="password" id="password" name="password" style={{width: 517, height: 76, left: 450, top: 335, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>
        <br></br>

        <label for ="optional" style={{width: 517, height: 76, left: 187, top: 420, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>(Optional)</label>
        <label for ="authorpassword" style={{width: 517, height: 76, left: 187, top: 455, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Author Password</label>
        <input type = "text" id = "optional" name = "optional" style={{width: 517, height: 76, left: 450, top: 435, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}></input>

        <button for ="signin" style={{width: 517, height: 76, left: 450, top: 600, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Sign In</button>
    </form>
    </div>

);
}

export default SignIn;