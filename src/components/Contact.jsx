import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaGithub,
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
      value: "+91 90824 56966",
      link: "tel:+919082456966",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      value: "linkedin.com/in/rohanmandal",
      link: "https://linkedin.com/in/rohanmandal",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/rohanmandal",
      link: "https://github.com/rohanmandal",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>
        </div>

        {/* Introduction - full width */}
        <p className="contact-intro">
          I'm currently open to opportunities and interested in
          connecting with teams where I can contribute, learn, and
          grow as a developer.
        </p>

        {/* Two-column content */}
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
                    item.label === "LinkedIn" || item.label === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label === "LinkedIn" || item.label === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="contact-icon">
                    {item.icon}
                  </span>

                  <span className="contact-item-content">
                    <span className="contact-label">
                      {item.label}
                    </span>

                    <span className="contact-value">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* Email Card */}
          <div className="contact-card">

            <div className="contact-card-icon">
              <FaEnvelope />
            </div>

            <h3>Have an opportunity?</h3>

            <p>
              I'd be happy to discuss a role, collaboration, or
              interesting project.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=er.rohanmandal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
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