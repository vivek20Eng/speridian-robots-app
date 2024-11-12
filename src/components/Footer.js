// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="800">
      <div className="footer-top">
        <div className="newsletter">
          <h3>Join the newsletter to keep<br />up with new collections.</h3>
          <div className="email-signup">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="brand">
          <div className="logo">
            <span className="robot-icon"><img src="/assets/Images/Logo-footer.svg" alt="logo"/></span>
          </div>
          <p className="tagline">Made with heart, by a robot.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Sitemap</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/collection">Collection</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookies Policy</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Social</h4>
            <div className="social-icons">
              <a href="#" className="social-icon instagram"></a>
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon twitter"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
  <p>© 2024 Robots Inc. All rights reserved.</p>
  <a href="https://github.com/vivek20Eng/speridian-robots-app.git" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.235 1.838 1.235 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .322.216.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>vivek
  </a>
</div>

    </footer>
  );
};

export default Footer;