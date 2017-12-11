import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-login">
        <h1 className="login-title">facebook</h1>
        <div className="navbar-content">
          <div>
            <div className="navbar-name">
              <div>
                <label>Email or Phone</label>
              </div>
              <input className="navbar-username-input" type="text" />
            </div>              
            <div>
              <input type="checkbox"/>
              <label>Keep Me Logged In</label>
            </div>
          </div>
          <div className="top">
            <div className="navbar-password">
              <div>
                <label>Password</label>
              </div>
              <input className="navbar-password-input" type="password" />
              <div>
                <label>Forgotten Password ?</label>
              </div>
            </div>
          </div>
          <div >
            <button className="navbar-login-button">Log In</button>
          </div>
        </div>
        
      </div>
    );
  }
}