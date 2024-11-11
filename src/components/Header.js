import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Robots</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collections">Collection</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;