import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="sitemap">
        <Link to="/">About</Link>
        <Link to="/collections">Collection</Link>
        <Link to="#">Community</Link>
      </div>
      <div className="legal">
        <Link to="#">Terms of Service</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Cookies Policy</Link>
      </div>
      <div className="social">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
};

export default Footer;