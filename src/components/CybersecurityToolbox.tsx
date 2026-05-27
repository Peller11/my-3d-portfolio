import "./styles/CybersecurityToolbox.css";

const tools = [
  { title: "Linux", subtitle: "Secure OS fundamentals" },
  { title: "Wireshark", subtitle: "Network traffic analysis" },
  { title: "TryHackMe", subtitle: "Hands-on security labs" },
  { title: "Git & GitHub", subtitle: "Version control and collaboration" },
  { title: "Networking Fundamentals", subtitle: "TCP/IP, routing, and switching" },
  { title: "Kali Linux", subtitle: "Pentesting and blue team tools" },
  { title: "Nmap", subtitle: "Network discovery and scanning" },
  { title: "Security Monitoring", subtitle: "Detection and response workflows" },
  { title: "Threat Detection", subtitle: "Identifying suspicious activity" },
  { title: "Log Analysis", subtitle: "Investigating security events" },
];

const CybersecurityToolbox = () => {
  return (
    <div className="toolbox-section section-container" id="toolbox">
      <div className="toolbox-panel">
        <div className="toolbox-copy">
          <p className="toolbox-label">Cybersecurity Toolbox</p>
          <h2>Tools and technologies I am learning and using on my cybersecurity journey.</h2>
        </div>

        <div className="toolbox-grid">
          {tools.map((tool) => (
            <article key={tool.title} className="toolbox-card">
              <div className="toolbox-card-glow" />
              <div className="toolbox-card-body">
                <span className="toolbox-card-title">{tool.title}</span>
                <p className="toolbox-card-subtitle">{tool.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CybersecurityToolbox;
