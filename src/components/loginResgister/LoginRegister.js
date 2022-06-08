import React, { useState } from "react";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input type="number" placeholder="Phone Number" />
          <button type="submit">Get OTP</button>
          <input type="number" placeholder="Enter OTP" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h4>Already created an account ?</h4>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h4>Donot have an account ?</h4>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
