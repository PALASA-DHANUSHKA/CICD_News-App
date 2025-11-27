import React from "react";
// import "App.css";
import "../pages/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Copyright */}
        <div className="footer-section">
          <img src="/footer-logo.png" alt="Logo" className="footer-logo" />
          <p>© 2025 Newsify. All rights reserved.</p>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>Designed with ❤️ by Venkat</p>
      </div>
    </footer>
  );
};

export default Footer;
