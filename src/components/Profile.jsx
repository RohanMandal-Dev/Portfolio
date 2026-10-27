import {
  FaArrowRight,
  FaDownload,
  FaGithub,
} from "react-icons/fa";

import "../Styles/Profile.css";

function Profile() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-greeting">HI, I'M</p>

          <h1>
            Rohan <span>Mandal</span>
          </h1>

          <h2>Full Stack-Developer</h2>

          <div className="availability">
            <span className="availability-dot"></span>
            Open to Opportunities
          </div>

          <p className="hero-description">
            Enthusiastic Software Developer with hands-on experience
            building practical web applications, integrating APIs, and
            working with databases. Skilled in Python, JavaScript,
            React.js, PHP, and MySQL. Passionate about problem-solving,
            learning modern technologies, and developing reliable
            software solutions.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              download="Rohan_Mandal_Resume.pdf"
            >
              Download Resume
              <FaDownload />
            </a>

            <a
              href="https://github.com/RohanMandal-Dev"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub />
              GitHub Profile
            </a>
          </div>

          {/* Technologies */}
          <div className="hero-tech">
            <span>Python</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/Profile.jpeg"
              alt="Portrait of Rohan Mandal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
