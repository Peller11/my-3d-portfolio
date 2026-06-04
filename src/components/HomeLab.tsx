import { FaWindows, FaNetworkWired } from "react-icons/fa";
import { SiWireshark, SiVirtualbox, SiTryhackme } from "react-icons/si";
import "./styles/HomeLab.css";

const homeLabItems = [
  {
    title: "Windows 10",
    subtitle: "Primary host OS for lab testing, traffic capture, and secure workspace.",
    icon: <FaWindows />,
  },
  {
    title: "Wireshark",
    subtitle: "Packet analysis and network traffic inspection for threat hunting.",
    icon: <SiWireshark />,
  },
  {
    title: "Nmap",
    subtitle: "Network discovery and security scanning for asset mapping.",
    icon: <FaNetworkWired />,
  },
  {
    title: "VirtualBox",
    subtitle: "Virtual machine orchestration for isolated lab environments.",
    icon: <SiVirtualbox />,
  },
  {
    title: "TryHackMe",
    subtitle: "Hands-on cybersecurity training platform for SOC skill building.",
    icon: <SiTryhackme />,
  },
];

const HomeLab = () => {
  return (
    <section className="homelab-section section-container" id="home-lab">
      <div className="homelab-panel">
        <div className="homelab-copy">
          <p className="homelab-label">Cybersecurity Home Lab</p>
          <h2>
            Home lab platforms and tools I use to practice network defense, traffic
            analysis, and virtual lab simulations.
          </h2>
        </div>

        <div className="homelab-grid">
          {homeLabItems.map((item) => (
            <article key={item.title} className="homelab-card">
              <div className="homelab-card-icon">{item.icon}</div>
              <div className="homelab-card-body">
                <span className="homelab-card-title">{item.title}</span>
                <p className="homelab-card-subtitle">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLab;
