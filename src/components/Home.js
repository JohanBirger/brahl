import React, { Component } from 'react';
import logo from '../img/logo512.png'

class Home extends Component {
  render() {
    return (
        <div className="App">
        <div className="App-header">
          <div className="darkmodal slideAni">
          <div className="spacer"/>
          <img className="slideAni" src={logo}></img>
          </div>
          <div className="typewriter">
          <div className="appear type"><h1 className="title">BRAHL Solutions AB</h1></div>
          </div>
        </div>
        </div>
    );
  }
}

export default Home;