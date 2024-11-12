import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        {/* <section className='logo-sec'> */}

      <div className="logo"><Link to="/">      <img src="/assets/Images/Logo-header.svg" alt="logo"/>
      </Link></div>
        {/* </section> */}
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
          <li  className='collection-btn'><Link to="/collections">Collection</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;