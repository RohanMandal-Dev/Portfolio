import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import "../styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "SQL", icon: null },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Responsive Web Design", icon: null },
      ],
    },

    {
      title: "Backend & APIs",
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST API", icon: null },
        { name: "JWT Authentication", icon: null },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL Optimization", icon: null },
        { name: "Django ORM", icon: null },
        { name: "Mongoose", icon: null },
      ],
    },

    {
      title: "Tools & Core Concepts",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: null },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Data Structures & Algorithms", icon: null },
        { name: "OOP", icon: null },
        { name: "DBMS", icon: null },
        { name: "System Design", icon: null },
        { name: "CI/CD", icon: null },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>TECHNICAL SKILLS</p>

          <h2>
            Technologies I use to build
            <span> practical solutions.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>

                    {skill.icon && (
                      <span className="skill-icon">
                        {skill.icon}
                      </span>
                    )}

                    <span>{skill.name}</span>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;