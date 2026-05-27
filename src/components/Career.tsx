import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My
          <br /> Cybersecurity
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Student</h4>
                <h5>2023 – Present</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Currently studying cybersecurity and building practical knowledge in
              networking, Linux, and security fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOC Analyst Path</h4>
                <h5>2025 – Present</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Focused on threat detection, log analysis, security monitoring, and
              blue team learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior SOC Analyst</h4>
                <h5>2026 Goal</h5>
              </div>
              <h3>2026 Goal</h3>
            </div>
            <p>
              Actively preparing for an entry-level SOC analyst role through
              hands-on practice and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;