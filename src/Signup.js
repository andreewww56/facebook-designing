import React from 'react';
import './Signup.css';

export default class Signup extends React.Component {
  render() {
    return (
      <div className="signup-content">
        <div>
        <h1>Sign Up</h1>
        <label>It's free and always will be</label>
        <div className="signup-container">
          <div className="signup firstname" >
            <input className="input-firstname" placeholder="First Name" type="text"/>
            <input className="input-lastname" placeholder="Last Name" type="text"/>
          </div>
          <div className="signup email">
            <input className="input" placeholder="Email" type="text"/>
          </div>
          <div className="signup email">
            <input className="input" placeholder="Re-enter email" type="text"/>
          </div>
          <div className="signup password">
            <input className="input" placeholder="Password" type="password"/>
          </div>
          <div className="signup date" >
            <input className="datepicker" type="text" placeholder="MM/DD/YYYY"/>
          </div>
          <div className="radiocheck"> 
            <div>
              <input type="radio"/>
              <label>Male</label>
            </div>
            <div>
              <input type="radio"/>
              <label>Female</label>
            </div>
          </div>  
          <label className="label-term">By Clicking Sign Up, you agree to our Terms and that you <br/>have read our Data Use Policy, including our Cookie Use</label>
          <div className="signup-button">
            <button className="buttonsignup">Signup</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}