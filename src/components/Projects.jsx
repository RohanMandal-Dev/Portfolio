import {
  FaPython,
  FaFileExcel,
  FaReact,
} from "react-icons/fa";

import {
  SiFlask,
  SiSelenium,
  SiPandas,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import "../Styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "S.W.A.P.",
      subtitle: "Smart WhatsApp Automation Platform",

      description:
        "Developed a web-based messaging automation application using Python, Flask, and Selenium. The application processes contact data from Excel files and provides start, stop, and resume controls, message status tracking, retry handling, and Excel report export.",

      technologies: [
        {
          name: "Python",
          icon: <FaPython />,
        },
        {
          name: "Flask",
          icon: <SiFlask />,
        },
        {
          name: "Selenium",
          icon: <SiSelenium />,
        },
        {
          name: "Pandas",
          icon: <SiPandas />,
        },
        {
          name: "OpenPyXL",
          icon: <FaFileExcel />,
        },
      ],
    },

    {
      title: "AyurVision",
      subtitle: "AI-Powered Ayurvedic Plant Identification",

      description:
        "Developed a web application that identifies plants from uploaded images using the Plant.id API and presents relevant information, including scientific names, Ayurvedic uses, benefits, and side effects. Implemented PHP backend APIs and MySQL database integration, with features for saving identified plants to a personal library and managing plant records through an admin panel.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "PHP",
          icon: <SiPhp />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Projects I've built to solve
            <span> practical problems.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-content">
                <p className="project-label">
                  {index === 0
                    ? "FEATURED PROJECT"
                    : "PROJECT"}
                </p>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-tech-item"
                      key={technology.name}
                    >
                      <span className="project-tech-icon">
                        {technology.icon}
                      </span>

                      {technology.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;