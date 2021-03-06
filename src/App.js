import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Signup from './Signup';
import Map from './map.png';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar/>           
          <div className="login-content">
            <div className="mapimage">
              <div className="label-app">
                <label >Facebook heps you connect and share with the <br/> people in your life</label>
              </div>
              <img className="image-map" src={Map} alt="img"/>
            </div>
            <div className="app-signup">
              <Signup/>
            </div>            
          </div>
          
        </div>
      </div>
    );
  }
}