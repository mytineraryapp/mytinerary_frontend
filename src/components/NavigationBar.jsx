import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/index">My Trips</Link></li>
        <li><Link to="#">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;