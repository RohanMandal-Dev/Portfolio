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


        {/* About Content */}
        <div className="about-content">

          {/* About Text */}
          <div className="about-text">

            <p>
              I am a Full Stack Python Developer with hands-on experience
              building practical web applications using Python, Flask,
              React.js, and Node.js.
            </p>

            <p>
              On the frontend, I enjoy building responsive and
              user-focused interfaces using React.js, JavaScript,
              HTML5, and CSS3. I focus on creating reusable components,
              clean layouts, intuitive navigation, and responsive
              designs that work smoothly across different screen sizes.
            </p>

            <p>
              On the backend, I work with Python, Flask, Node.js,
              REST APIs, and database technologies including MySQL,
              PostgreSQL, and MongoDB. I also have experience with
              automation and data processing using Selenium, Pandas,
              and OpenPyXL.
            </p>

            <p>
              I am a fast learner who enjoys exploring new technologies,
              improving my development skills, and applying them to solve
              real-world problems. I am currently available for immediate
              joining and looking forward to contributing to a
              collaborative engineering team.
            </p>

          </div>


          {/* Highlights */}
          <div className="about-cards">

            <div className="about-card">
              <FaLaptopCode className="about-icon" />

              <div>
                <h3>Frontend Development</h3>

                <p>
                  Building responsive interfaces with React.js,
                  JavaScript, HTML5, and CSS3 using reusable and
                  user-focused components.
                </p>
              </div>
            </div>


            <div className="about-card">
              <FaDatabase className="about-icon" />

              <div>
                <h3>Backend & Data</h3>

                <p>
                  Developing backend solutions with Python, Flask,
                  Node.js, REST APIs, and SQL/NoSQL databases.
                </p>
              </div>
            </div>


            <div className="about-card">
              <FaCode className="about-icon" />

              <div>
                <h3>Automation & Development</h3>

                <p>
                  Working with Selenium, Pandas, and OpenPyXL to
                  automate tasks and process structured data.
                </p>
              </div>
            </div>


            <div className="about-card">
              <FaLightbulb className="about-icon" />

              <div>
                <h3>Problem Solving</h3>

                <p>
                  Focused on learning quickly, improving technical
                  skills, and applying technology to practical problems.
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