import React, { useState } from 'react';

const Login = () => {
  const [change, setChange] = useState('');

  const showSignIn = () => {
    setChange('');
  };
  const showSignUp = () => {
    setChange( 'right-panel-active');
  };
  console.log(change)
  return (
    <div className="login">
      <div className={`container ${change}`}>
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social" id="facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social" id="google"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social" id="linkedin"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social" id="facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social" id="google"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social" id="linkedin"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/Singup">Forgot your password?</a>
            <button type="button">Sign in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={showSignIn} type="button">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={showSignUp} type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
