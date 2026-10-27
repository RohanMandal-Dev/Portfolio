import {
  FaPython,
  FaFileExcel,
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaJs,
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
      subtitle: "Smart WhatsApp Automation Program",
      image: "/images/swap-cover.png",
      label: "FEATURED PROJECT",

      description:
        "Developed a web-based messaging automation application using Python, Flask, and Selenium. Processes Excel contact data and provides start, stop, and resume controls, message status tracking, retry handling, and Excel report export.",

      github:
        "https://github.com/RohanMandal-Dev/SWAP-WhatsApp-Automation",

      live:
        "https://swap-whatsapp-automation.onrender.com",

      note:
        "WhatsApp login automation is currently under deployment troubleshooting.",

      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Selenium", icon: <SiSelenium /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "OpenPyXL", icon: <FaFileExcel /> },
      ],
    },

    {
      title: "AyurVision",
      subtitle: "AI-Powered Ayurvedic Plant & Herb Identifier",
      image: "/images/ayurvision-cover.png",
      label: "BCA PROJECT",

      description:
        "Developed a web application that identifies plants from uploaded images using plant identification APIs. Displays scientific names, Ayurvedic uses, benefits, and potential side effects. Includes user authentication, a personal plant library, PHP APIs, MySQL integration, and an admin dashboard for managing plant information.",

      github:
        "https://github.com/RohanMandal-Dev/AyurVision",

      live:
        "https://ayur-vision-chi.vercel.app/",

      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  const upcomingProjects = [
    {
      title: "Python Backend Development",
      description:
        "Exploring backend development with Python, REST APIs, authentication, database integration, and scalable application design.",
      status: "IN PROGRESS",
    },
    {
      title: "AI-Powered Application",
      description:
        "Planning an application that integrates AI capabilities into a practical, user-focused software solution.",
      status: "PLANNED",
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

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <p className="project-label">{project.label}</p>

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

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-github"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-live"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                {project.note && (
                  <p className="project-note">{project.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="upcoming-section">
          <div className="upcoming-heading">
            <p>WHAT'S NEXT</p>

            <h2>
              Upcoming <span>Projects.</span>
            </h2>

            <p className="upcoming-intro">
              New ideas, continuous learning, and practical development.
            </p>
          </div>

          <div className="upcoming-grid">
            {upcomingProjects.map((project) => (
              <article
                className="upcoming-card"
                key={project.title}
              >
                <div className="upcoming-icon">
                  <FaClock />
                </div>

                <span className="upcoming-status">
                  {project.status}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;