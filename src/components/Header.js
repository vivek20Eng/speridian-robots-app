import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="800">
        {/* <section className='logo-sec'> */}

      <div className="logo"><Link to="/">      <img src="/assets/Images/Logo-header.svg" alt="logo"/>
      </Link></div>
        {/* </section> */}
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
          <Link to="/collections">
          <li  className='collection-btn'>Collection</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;