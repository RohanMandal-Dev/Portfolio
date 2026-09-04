import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaFileExcel,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFlask,
  SiSelenium,
  SiPandas,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import "../Styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "S.W.A.P.",
      subtitle: "Smart WhatsApp Automation Platform",

      description:
        "A Flask-based web application for automating bulk WhatsApp Web messaging using Selenium and Python, with real-time start, pause, and resume controls. Integrated Pandas and OpenPyXL for Excel contact processing, validation, retries, and execution reports.",

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

      image: "/projects/swap.png",

      github: "#",
      demo: "#",

      featured: true,
    },

    {
      title: "AyuVision",
      subtitle: "AI-Powered Plant Identification Web Application",

      description:
        "A full-stack web application built with React.js and Node.js to identify Ayurvedic plants from uploaded images and digitally preserve traditional plant knowledge. Includes a Python-based AI plant identification module and database integration using MongoDB and MySQL.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Python",
          icon: <FaPython />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],

      image: "/projects/ayuvision.png",

      github: "#",
      demo: "#",

      featured: false,
    },
  ];

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section className="projects" id="projects">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Projects I've built to solve
            <span> practical problems.</span>
          </h2>
        </div>


        {/* Featured Project */}
        {featuredProject && (
          <div className="featured-project-wrapper">

            <article className="project-card project-featured">

              <div className="project-image">
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} project preview`}
                />
              </div>

              <div className="project-content">

                <p className="project-label">
                  FEATURED PROJECT
                </p>

                <h3>{featuredProject.title}</h3>

                <h4>{featuredProject.subtitle}</h4>

                <p className="project-description">
                  {featuredProject.description}
                </p>

                <div className="project-tech">

                  {featuredProject.technologies.map(
                    (technology) => (
                      <span
                        className="project-tech-item"
                        key={technology.name}
                      >
                        <span className="project-tech-icon">
                          {technology.icon}
                        </span>

                        {technology.name}
                      </span>
                    )
                  )}

                </div>

                <div className="project-actions">

                  <a
                    href={featuredProject.github}
                    className="project-button project-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={featuredProject.demo}
                    className="project-button project-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </article>

          </div>
        )}


        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="other-projects-grid">

            {otherProjects.map((project) => (
              <article
                className="project-card regular-project"
                key={project.title}
              >

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                </div>

                <div className="project-content">

                  <p className="project-label">
                    PROJECT
                  </p>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          className="project-tech-item"
                          key={technology.name}
                        >
                          <span className="project-tech-icon">
                            {technology.icon}
                          </span>

                          {technology.name}
                        </span>
                      )
                    )}

                  </div>

                  <div className="project-actions">

                    <a
                      href={project.github}
                      className="project-button project-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="project-button project-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;