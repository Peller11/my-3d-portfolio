import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Oyewale Pelumi, a cybersecurity student passionate about digital security, SOC analysis, and modern technology. I enjoy building premium websites, learning cybersecurity tools, and exploring how systems work and how to protect them.
        </p>

        <div className="currently-learning">
          <p className="currently-learning-label">Currently Learning</p>
          <div className="currently-learning-grid">
            <span>SOC Operations</span>
            <span>Linux for Security</span>
            <span>Networking Fundamentals</span>
            <span>Threat Detection</span>
            <span>Wireshark Analysis</span>
            <span>Blue Team Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;