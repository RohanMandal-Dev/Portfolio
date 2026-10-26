import { FaArrowRight, FaDownload } from "react-icons/fa";
import "../Styles/Profile.css";

function Profile() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">HI, I'M</p>

          <h1>
            Rohan <span>Mandal</span>
          </h1>

          <h2>Software Developer</h2>

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

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <FaArrowRight />
            </a>

            <a href="/resume.pdf" className="btn btn-secondary" download>
              Download Resume
              <FaDownload />
            </a>
          </div>

          <div className="hero-tech">
            <span>Python</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/Profile.jpeg"
              alt="Rohan Mandal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;