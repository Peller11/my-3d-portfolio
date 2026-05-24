import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              OYEWALE
              <br />
              <span>PELUMI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Cybersecurity Student | Future SOC Analyst</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cyber</div>
              <div className="landing-h2-2">Security</div>
            </h2>
            <h2>
              <div className="landing-h2-info">SOC</div>
              <div className="landing-h2-info-1">Ready</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
