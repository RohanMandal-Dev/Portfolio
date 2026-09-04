import { FaArrowRight, FaDownload } from "react-icons/fa";
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

          <h2>Full Stack Python Developer</h2>

          <div className="availability">
            <span className="availability-dot"></span>
            Available for Immediate Joining
          </div>

          <p className="hero-description">
            Detail-oriented Full Stack Python Developer with hands-on
            experience building practical web applications using Python,
            Flask, React.js, Node.js, and databases. Passionate about
            automation, data processing, and solving real-world problems
            through technology.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <FaArrowRight />
            </a>

            <a href="/resume.pdf" className="btn btn-secondary">
              Download Resume
              <FaDownload />
            </a>
          </div>

          {/* Highlighted Technologies */}
          <div className="hero-tech">
            <span>Python</span>
            <span>React.js</span>
            <span>Flask</span>
            <span>PostgreSQL</span>
          </div>

        </div>

        {/* Profile Image */}
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