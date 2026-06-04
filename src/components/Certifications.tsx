import "./styles/Certifications.css";

const certs = [
  { title: "Google Cybersecurity Professional Certificate", status: "in-progress" },
  { title: "Cisco Networking Basics", status: "completed" },
  { title: "Security+", status: "planned" },
];

const Certifications = () => {
  return (
    <section className="certs-section section-container" id="certifications">
      <div className="certs-panel">
        <div className="certs-copy">
          <p className="certs-label">Certifications & Learning</p>
          <h2>Certifications I am pursuing as part of my cybersecurity and network security journey.</h2>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <article key={c.title} className="cert-card">
              <div className={`cert-badge cert-${c.status}`}>{
                c.status === "in-progress" ? "In Progress" :
                c.status === "planned" ? "Planned" :
                c.status === "completed" ? "Completed" :
                c.status === "learning" ? "Learning" :
                c.status === "future" ? "Future Goal" :
                c.status === "ongoing" ? "Ongoing Practice" : ""
              }</div>
              <h3 className="cert-title">{c.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
