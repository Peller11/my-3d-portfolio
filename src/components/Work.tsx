import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Wireshark Traffic Analysis Lab",
    category:
      "A hands-on cybersecurity learning project focused on analyzing real network traffic using Wireshark to understand DNS requests, TCP communication, and encrypted TLS traffic.",
    tools: "Wireshark, Windows Networking, Browser Traffic Monitoring",
    image: "/images/wireshark-screenshot.svg",
    link: "#",
    repo: "#",
  },
  {
    title: "Restaurant Website",
    category:
      "A modern restaurant website with responsive design, reservation functionality, premium UI, and professional business branding.",
    tools: "HTML, CSS, JavaScript, React, Vercel",
    image: "/images/callhq.png",
    link: "#",
  },
  {
    title: "3D Cybersecurity Portfolio",
    category:
      "An interactive 3D portfolio website showcasing my cybersecurity journey, skills, and projects with modern animations and responsive design.",
    tools: "React, Three.js, TypeScript, Vite",
    image: "/images/whatsapp.png",
    link: "#",
  },
  {
    title: "Cybersecurity Learning Lab",
    category:
      "A hands-on learning environment for practicing Linux, networking, system administration, and blue team cybersecurity concepts.",
    tools: "Linux, Networking, TryHackMe, Wireshark",
    image: "/images/broki.png",
    link: "#",
  },
];

const screenshotGallery: Record<string, string[]> = {
  "Wireshark Traffic Analysis Lab": [
    "/images/projects/dns-analysis.png",
    "/images/projects/tcp-analysis.png",
    "/images/projects/tls-analysis.png",
  ],
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setGalleryIndex(0);
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.tools && (
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                        )}


                        <div className="project-actions">
                          <a className="project-btn project-btn-primary" href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
                          <a className="project-btn project-btn-ghost" href={project.repo || "#"} target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {screenshotGallery[project.title] ? (
                        <div className="project-gallery-wrapper">
                          <div className="project-gallery-main">
                            <img
                              src={screenshotGallery[project.title][galleryIndex]}
                              alt={`${project.title} screenshot ${galleryIndex + 1}`}
                            />
                          </div>
                          <div className="project-gallery-thumbs">
                            {screenshotGallery[project.title].map((src: string, idx: number) => (
                              <button
                                type="button"
                                className={`gallery-thumb ${galleryIndex === idx ? "gallery-thumb-active" : ""}`}
                                onClick={() => setGalleryIndex(idx)}
                                aria-label={`View screenshot ${idx + 1}`}
                                key={idx}
                              >
                                <img src={src} alt={`${project.title} thumbnail ${idx + 1}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;