import './App.css';
import logo from './img/logo512.png'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Navbar';

class App extends Component {
  render() {
    return (
    <Router>
      <NavBar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>

      </Router>
    );
  }
}

export default App;