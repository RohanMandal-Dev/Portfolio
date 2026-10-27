import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../Styles/Contact.css";

function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "er.rohanmandal@gmail.com",
      link: "mailto:er.rohanmandal@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "9082456966",
      link: "tel:+919082456966",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Kurla (West), Mumbai, Maharashtra, India",
      link: "https://www.google.com/maps/search/?api=1&query=Kurla+West%2C+Mumbai%2C+Maharashtra",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/RohanMandal-Dev",
      link: "https://github.com/RohanMandal-Dev",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>
            Let's build something
            <span> together.</span>
          </h2>
        </div>

        {/* Introduction */}
        <p className="contact-intro">
          I'm a Software Developer interested in building practical
          applications, solving problems, and learning new technologies.
          I'm open to opportunities where I can contribute my technical
          skills, collaborate with a team, and grow professionally.
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-list">
              {contactDetails.map((item) => (
                <a
                  href={item.link}
                  key={item.label}
                  className="contact-item"
                  target={
                    ["GitHub", "Location"].includes(item.label)
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    ["GitHub", "Location"].includes(item.label)
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="contact-icon">{item.icon}</span>

                  <span className="contact-item-content">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Email Contact Card */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>

            <h3>Have an opportunity?</h3>

            <p>
              I'd be happy to discuss a job opportunity, collaboration,
              or an interesting software development project.
            </p>

            <a
              href="mailto:er.rohanmandal@gmail.com?subject=Job%20Opportunity%20-%20Software%20Developer"
              className="contact-button"
            >
              Send Me an Email
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;