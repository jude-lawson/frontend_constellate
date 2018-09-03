import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Home from './Home'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
