import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import HomePage from './HomePage'
import PostsPage from './PostsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/posts" component={PostsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
