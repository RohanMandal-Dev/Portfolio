import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

import "../Styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>ABOUT ME</p>

          <h2>
            Building practical solutions with
            <span> modern technology.</span>
          </h2>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <p>
              I am an aspiring Software Developer who enjoys turning
              ideas into practical applications. I have hands-on
              experience building web applications, integrating APIs,
              working with databases, and solving real-world problems
              through technology.
            </p>

            <p>
              My frontend skills include React.js, JavaScript, HTML5,
              CSS3, and Bootstrap. I focus on building responsive
              interfaces, reusable components, and user-friendly
              experiences that make applications intuitive and easy
              to use.
            </p>

            <p>
              My backend development skills include Python, Flask,
              PHP, and REST API integration. I have worked with MySQL
              and PostgreSQL for database management and use tools
              such as Git, GitHub, VS Code, PyCharm, and Postman
              during development.
            </p>

            <p>
              Through projects like AyurVision and S.W.A.P., I have
              applied my skills to plant identification, API
              integration, database management, web application
              development, and Excel-based automation. I am a quick
              learner who embraces modern development tools, adapts
              to new technologies, and continuously works to improve
              my problem-solving and technical skills.
            </p>
          </div>

          {/* About Cards */}
          <div className="about-cards">
            <div className="about-card">
              <FaLaptopCode className="about-icon" />

              <div>
                <h3>Frontend Development</h3>

                <p>
                  Building responsive and user-friendly interfaces
                  using React.js, JavaScript, HTML5, CSS3, and
                  Bootstrap.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaDatabase className="about-icon" />

              <div>
                <h3>Backend & Databases</h3>

                <p>
                  Developing backend applications and REST APIs
                  using Python, Flask, and PHP, with database
                  integration using MySQL and PostgreSQL.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaCode className="about-icon" />

              <div>
                <h3>Automation & Integration</h3>

                <p>
                  Developing automation workflows with Python,
                  Selenium, Pandas, and OpenPyXL, while integrating
                  APIs into practical applications.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaLightbulb className="about-icon" />

              <div>
                <h3>Learning & Problem Solving</h3>

                <p>
                  Learning new technologies quickly, exploring
                  modern development tools, and applying technical
                  knowledge to build reliable software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;