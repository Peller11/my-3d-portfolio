import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projectCategories = [
  {
    label: "Cybersecurity Projects",
    description:
      "Security labs and investigative projects that demonstrate practical network analysis, discovery, and defense skills.",
    projects: [
      {
        title: "Wireshark Traffic Analysis Lab",
        summary:
          "A hands-on cybersecurity learning project focused on analyzing real network traffic using Wireshark to understand DNS requests, TCP communication, and encrypted TLS traffic.",
        status: "Completed",
        tools: "Wireshark, Windows Networking, Browser Traffic Monitoring",
        image: "/images/wireshark-screenshot.svg",
        link: "#",
        repo: "#",
      },
      {
        title: "Nmap Network Discovery Lab",
        summary:
          "A targeted network discovery lab using Nmap to map hosts, identify open ports, and profile services across both local and remote environments.",
        status: "In Development",
        tools: "Nmap, Network Scanning, OS Fingerprinting, Scripting",
        image: "/images/placeholder.webp",
        link: "#",
        repo: "#",
      },
      {
        title: "Cybersecurity Learning Lab",
        summary:
          "A hands-on learning environment for practicing Linux, networking, system administration, and blue team cybersecurity concepts.",
        status: "In Development",
        tools: "Linux, Networking, TryHackMe, Wireshark",
        placeholder: true,
        placeholderSubtitle: "Hands-on labs and security practice coming soon",
        tags: ["TryHackMe", "Linux", "Networking", "Blue Team", "SOC Skills"],
        link: "#",
      },
    ],
  },
  {
    label: "Development Projects",
    description:
      "Clean and polished web development projects with responsive interfaces, strong usability, and modern visual design.",
    projects: [
      {
        title: "Restaurant Website",
        summary:
          "A modern restaurant website with responsive design, reservation functionality, premium UI, and professional business branding.",
        status: "Completed",
        tools: "HTML, CSS, JavaScript, React, Vercel",
        placeholder: true,
        link: "#",
      },
      {
        title: "Expense Tracker",
        summary:
          "A powerful expense tracker app for organizing budgets, recording spending, and visualizing cash flow through a polished interface.",
        status: "In Development",
        tools: "React, TypeScript, Local Storage, Responsive UI",
        placeholder: true,
        link: "#",
      },
      {
        title: "3D Portfolio Website",
        summary:
          "An interactive 3D portfolio website showcasing my cybersecurity journey, skills, and projects with modern animations and responsive design.",
        status: "Updating",
        tools: "React, Three.js, TypeScript, Vite",
        image: "/images/projects/portfolio-home.png",
        link: "#",
      },
    ],
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-categories">
          {projectCategories.map((category) => (
            <section className="project-category" key={category.label}>
              <div className="project-category-header">
                <span className="project-category-label">{category.label}</span>
                <p>{category.description}</p>
              </div>
              <div className="project-cards">
                {category.projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-card-content">
                      <div>
                        <div className="project-card-header">
                          <h3>{project.title}</h3>
                          {project.status && (
                            <span
                              className={`project-status-badge status-${project.status
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {project.status}
                            </span>
                          )}
                        </div>
                        <p className="project-card-summary">{project.summary}</p>
                      </div>

                      <div className="project-card-meta">
                        <p className="project-card-tools-label">Tools & Features</p>
                        <p className="project-card-tools">{project.tools}</p>
                      </div>

                      <div className="project-actions">
                        {project.link && project.link !== "#" ? (
                          <a
                            className="project-btn project-btn-primary"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        ) : (
                          <button className="project-btn project-btn-disabled" disabled>
                            Coming Soon
                          </button>
                        )}
                        {project.repo && (
                          <a
                            className="project-btn project-btn-ghost"
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {project.placeholder ? (
                      <div
                        className="project-placeholder-image"
                        aria-label={`Placeholder screenshot for ${project.title}`}
                      >
                        <div className="project-placeholder-inner">
                          <span className="project-placeholder-title">
                            {project.title}
                          </span>
                          {project.placeholderSubtitle && (
                            <span className="project-placeholder-subtitle">
                              {project.placeholderSubtitle}
                            </span>
                          )}
                          <div className="project-placeholder-tags">
                            {project.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="project-placeholder-chip"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link || "#"}
                      />
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
