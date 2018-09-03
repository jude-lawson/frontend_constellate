import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <div id="headings-container">
        <h1>CONSTELLATE</h1>
        <h4>Let's talk tech</h4>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
