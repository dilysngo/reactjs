import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-bottom">
        <p>HC Software ©. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="/coming-soon" target="_blank" rel="noreferrer">
            Term of Service
          </a>
          <span className="hr-hor" />
          <a href="/coming-soon" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
