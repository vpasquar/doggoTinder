import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navpills from './components/Nav/Navpills.js';
import About from './components/About/About.js';
import Discover from './components/Discover/Discover.js';
import Search  from './components/Search/Search.js';

const App = () => (
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
)

export default App;
