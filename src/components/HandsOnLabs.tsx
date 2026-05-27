import "./styles/HandsOnLabs.css";

const labs = [
  {
    title: "Linux Practice Lab",
    desc: "Practicing Linux commands, file permissions, system navigation, and administration for cybersecurity.",
  },
  {
    title: "Networking Lab",
    desc: "Learning IP addressing, DNS, TCP/IP, protocols, troubleshooting, and packet flow.",
  },
  {
    title: "Wireshark Traffic Analysis",
    desc: "Analyzing network packets and understanding suspicious traffic patterns.",
  },
  {
    title: "TryHackMe Blue Team Practice",
    desc: "Hands-on cybersecurity labs focused on SOC workflows, threat detection, and defensive security.",
  },
  {
    title: "Threat Detection Practice",
    desc: "Learning how to identify indicators of compromise and suspicious behavior.",
  },
  {
    title: "Log Analysis Practice",
    desc: "Studying security logs and monitoring activities to understand attack traces.",
  },
];

const HandsOnLabs = () => {
  return (
    <section className="hands-labs-section section-container" id="hands-on-labs">
      <div className="hands-labs-panel">
        <div className="hands-labs-copy">
          <p className="hands-labs-label">Hands-On Security Labs</p>
          <h2>Practical cybersecurity exercises and environments I use to build real-world SOC and blue team skills.</h2>
        </div>

        <div className="hands-labs-grid">
          {labs.map((lab) => (
            <article key={lab.title} className="lab-card">
              <div className="lab-card-glow" />
              <div className="lab-card-body">
                <h3 className="lab-title">{lab.title}</h3>
                <p className="lab-desc">{lab.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandsOnLabs;
