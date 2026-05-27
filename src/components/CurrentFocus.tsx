import "./styles/CurrentFocus.css";

const items = [
  {
    title: "SOC Operations",
    desc: "Learning security monitoring, incident detection, and blue team workflows.",
  },
  {
    title: "Threat Detection",
    desc: "Studying indicators of compromise, suspicious activity, and attack behavior.",
  },
  {
    title: "Linux for Security",
    desc: "Building practical Linux administration and cybersecurity skills.",
  },
  {
    title: "Networking Fundamentals",
    desc: "Learning protocols, network traffic, troubleshooting, and secure communication.",
  },
  {
    title: "Wireshark Analysis",
    desc: "Practicing packet inspection and traffic analysis.",
  },
  {
    title: "SIEM & Log Monitoring",
    desc: "Exploring log analysis and security event monitoring basics.",
  },
];

const CurrentFocus = () => {
  return (
    <section className="current-focus-section section-container" id="current-focus">
      <div className="current-focus-panel">
        <div className="current-focus-copy">
          <p className="current-focus-label">Current Focus</p>
          <h2>What I am currently learning and improving on as an aspiring SOC Analyst.</h2>
        </div>

        <div className="current-focus-grid">
          {items.map((it) => (
            <div key={it.title} className="focus-card">
              <div className="focus-card-glow" />
              <div className="focus-card-body">
                <h3 className="focus-title">{it.title}</h3>
                <p className="focus-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
