import {
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";

import "../styles/Education.css";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      institution: "Tilak Maharashtra Vidyapeeth",
      location: "Maharashtra, India",
      duration: "2026",
    },

    {
      icon: <FaSchool />,
      degree: "Higher Secondary Certificate (12th)",
      field: "Higher Secondary Education",
      institution: "Mumbai University",
      location: "Mumbai, Maharashtra",
      duration: "12th",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>EDUCATION</p>

          <h2>
            My academic
            <span> journey.</span>
          </h2>
        </div>


        {/* Education List */}
        <div className="education-list">

          {education.map((item) => (
            <article
              className="education-card"
              key={`${item.degree}-${item.duration}`}
            >

              <div className="education-icon">
                {item.icon}
              </div>


              <div className="education-content">

                <div className="education-top">
                  <span className="education-duration">
                    {item.duration}
                  </span>
                </div>


                <h3>{item.degree}</h3>

                <p className="education-field">
                  {item.field}
                </p>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-location">
                  {item.location}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;