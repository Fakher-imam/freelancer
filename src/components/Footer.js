import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-3"
      style={{
        background: 'linear-gradient(to right, #111827, #1f2937)',
        color: '#f9fafb',
      }}
    >
      <div className="container">
        <div className="row">

          {/* Brand / Intro */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white">🚀 FreelancePort</h5>
            <p style={{ color: '#d1d5db' }}>
              Empowering freelancers to build stunning portfolios with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white mb-2">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none d-block mb-1" style={{ color: '#d1d5db' }}>
                  🏠 Home
                </Link>
              </li>
             
              <li>
                <Link to="/services" className="text-decoration-none d-block mb-1" style={{ color: '#d1d5db' }}>
                💼 Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none d-block mb-1" style={{ color: '#d1d5db' }}>
                  ✉️ Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white mb-2">Follow Us</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="https://github.com/" target="_blank" rel="noreferrer" style={{ color: '#f3f4f6' }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{ color: '#f3f4f6' }}>
                <FaLinkedin />
              </a>
              <a href="mailto:youremail@example.com" style={{ color: '#f3f4f6' }}>
                <FaEnvelope />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" style={{ color: '#f3f4f6' }}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center pt-3 mt-3" style={{ borderTop: '1px solid #374151', color: '#9ca3af' }}>
          © {new Date().getFullYear()} FreelancePort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
