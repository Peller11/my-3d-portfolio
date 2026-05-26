import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Name:</h2>
            <h1>
              OYEWALE
              <br />
              <span>PELUMI</span>
            </h1>
<<<<<<< HEAD
            <p className="hero-badge">300 Level Cybersecurity Student</p>
=======
>>>>>>> 505c90f31e9b8485c3b5aff376b047970e943c98
          </div>
          <div className="landing-info">
            <h3>Cybersecurity Student | Aspiring SOC Analyst</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Threat</div>
              <div className="landing-h2-2">Detection</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Blue</div>
              <div className="landing-h2-info-1">Team</div>
            </h2>
            <p className="landing-description">
              Focused on threat detection, Linux, networking, and security monitoring.
              Currently building hands-on blue team and SOC skills.
            </p>
<<<<<<< HEAD
            <p className="landing-tagline">
              Building Blue Team Skills, One Lab at a Time.
            </p>
            <div className="landing-cta">
              <a href="#work" className="landing-cta-button landing-cta-primary">
                View My Projects
              </a>
              <a href="#about" className="landing-cta-button landing-cta-secondary">
                Explore My Journey
              </a>
              <a href="#" className="landing-cta-button landing-cta-tertiary">
                Download CV
              </a>
            </div>
=======
>>>>>>> 505c90f31e9b8485c3b5aff376b047970e943c98
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
