import React, { Component } from 'react';
import logo from '../img/logo512.png'

class About extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <div className="darkmodal slideAni">
      <div className="spacer"/>
      <img className="slideAni" src={logo}></img>
      </div>
      <div className="typewriter">
      <div className=""><h1 className="darktext">About</h1></div>
      </div>
    </div>
    </div>
    );
  }
}

export default About;