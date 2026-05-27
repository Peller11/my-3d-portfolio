import "./styles/Certifications.css";

const certs = [
  { title: "Google Cybersecurity Certificate", status: "in-progress" },
  { title: "TryHackMe SOC Level 1", status: "planned" },
  { title: "Cisco Networking Basics", status: "learning" },
  { title: "CompTIA Security+", status: "future" },
  { title: "Linux & Security Labs", status: "ongoing" },
];

const Certifications = () => {
  return (
    <section className="certs-section section-container" id="certifications">
      <div className="certs-panel">
        <div className="certs-copy">
          <p className="certs-label">Certifications & Learning</p>
          <h2>Certifications I am pursuing and learning goals on my cybersecurity journey.</h2>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <article key={c.title} className="cert-card">
              <div className={`cert-badge cert-${c.status}`}>{
                c.status === "in-progress" ? "In Progress" :
                c.status === "planned" ? "Planned" :
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
