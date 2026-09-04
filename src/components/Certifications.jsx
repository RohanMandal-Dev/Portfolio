import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import "../Styles/Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Python Programming",
      issuer: "Issuing Organization",
      year: "2026",
      certificate: "/certificates/python.pdf",
    },
    {
      title: "Web Development",
      issuer: "Issuing Organization",
      year: "2026",
      certificate: "/certificates/web-development.pdf",
    },
    {
      title: "SQL & Database",
      issuer: "Issuing Organization",
      year: "2026",
      certificate: "/certificates/sql.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="section-container">

        <div className="section-heading">
          <p>CERTIFICATIONS</p>

          <h2>
            Courses and certifications that support my
            <span> technical growth.</span>
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
                {certificate.issuer}
              </p>

              <span className="certificate-year">
                {certificate.year}
              </span>

              <a
                href={certificate.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
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