import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../Styles/Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Python Full Stack Developer",
      issuer: "CNC Web World",
      year: "2026",
      description:
        "Professional training in Python full-stack development.",
      certificate:
        "https://drive.google.com/file/d/1BjginDr_Kb49n43m6Z24T12fGMoiinsK/view?usp=sharing",
    },

    // Add more verified certificates here when you're ready.
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="section-container">
        <div className="section-heading">
          <p>CERTIFICATIONS</p>

          <h2>
            Learning, building, and growing my
            <span> technical skills.</span>
          </h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <h3>{certificate.title}</h3>

              <p className="certificate-issuer">
                Issued by {certificate.issuer}
              </p>

              <span className="certificate-year">
                {certificate.year}
              </span>

              {certificate.description && (
                <p className="certificate-description">
                  {certificate.description}
                </p>
              )}

              <a
                href={certificate.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
                aria-label={`View ${certificate.title} certificate`}
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;