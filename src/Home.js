import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <p id="splash-intro">It takes one spark to start a fire. Let's toss our ideas out there, see what we can create, and change the world.</p>
      <Link id='get-started' to='/posts'>Get Started</Link>
    </main>
  );
}

export default Home;
