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
        <div className="section-heading">
          <p>ABOUT ME</p>

          <h2>
            Building practical solutions with
            <span> modern technology.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am an aspiring Software Developer with hands-on
              experience building web applications, integrating APIs,
              and working with databases. I enjoy turning ideas into
              practical software solutions that address real-world needs.
            </p>

            <p>
              My frontend development skills include React.js,
              JavaScript, HTML5, CSS3, and Bootstrap. I focus on
              creating responsive interfaces, reusable components,
              and user-friendly experiences.
            </p>

            <p>
              On the backend, I work with Python, PHP, Node.js,
              Express.js, and REST APIs. I also have experience
              working with MySQL and MongoDB, along with development
              tools such as Git, GitHub, VS Code, PyCharm, and Postman.
            </p>

            <p>
              Through projects like AyurVision and S.W.A.P., I have
              applied my technical skills to plant identification,
              API integration, database management, automation, and
              Excel-based data processing. I am a quick learner who
              enjoys exploring modern technologies, improving my
              problem-solving abilities, and contributing to
              collaborative development teams.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <FaLaptopCode className="about-icon" />

              <div>
                <h3>Frontend Development</h3>

                <p>
                  Creating responsive and user-friendly interfaces
                  using React.js, JavaScript, HTML5, CSS3, and Bootstrap.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaDatabase className="about-icon" />

              <div>
                <h3>Backend & Databases</h3>

                <p>
                  Developing application backends using Python, PHP,
                  Node.js, Express.js, REST APIs, MySQL, and MongoDB.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaCode className="about-icon" />

              <div>
                <h3>Automation & Integration</h3>

                <p>
                  Building automation workflows with Python, Flask,
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
                  Learning new technologies quickly, solving practical
                  problems, and applying technical knowledge to build
                  reliable software solutions.
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