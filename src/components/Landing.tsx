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
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
