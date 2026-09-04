import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../Styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Rohan<span>.dev</span>
            </a>

            <p>
              Software Developer passionate about building practical
              solutions with modern technologies.
            </p>
          </div>


          {/* Social Links */}
          <div className="footer-socials">

            <a
              href="https://github.com/rohanmandal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rohanmandal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=er.rohanmandal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Rohan Mandal. All rights reserved.
          </p>

          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;