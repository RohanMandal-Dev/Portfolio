import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiPhp,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import "../Styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "PHP", icon: <SiPhp /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: null },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },

    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: null },
        { name: "PyCharm", icon: null },
        { name: "Postman", icon: <SiPostman /> },
        { name: "MySQL Workbench", icon: <SiMysql /> },
        { name: "MongoDB Compass", icon: <SiMongodb /> },
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