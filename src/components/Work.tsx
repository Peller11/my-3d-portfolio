import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
<<<<<<< HEAD
    title: "Restaurant Website",
    category:
      "A modern restaurant website with responsive design, reservation functionality, premium UI, and professional business branding.",
    tools: "HTML, CSS, JavaScript, React, Vercel",
=======
    title: "Luxury Restaurant Website",
    category:
      "A premium restaurant website with modern animations, mobile responsiveness, and reservation features.",
    tools: "React, Responsive Layout, Premium Animations, Gallery, Contact Flow",
>>>>>>> 505c90f31e9b8485c3b5aff376b047970e943c98
    image: "/images/callhq.png",
    link: "#",
  },
  {
<<<<<<< HEAD
    title: "3D Cybersecurity Portfolio",
    category:
      "An interactive 3D portfolio website showcasing my cybersecurity journey, skills, and projects with modern animations and responsive design.",
    tools: "React, Three.js, TypeScript, Vite",
=======
    title: "3D Portfolio Website",
    category:
      "An interactive 3D portfolio built using React and modern frontend animations.",
    tools: "React, Three.js, Scroll Animations, Interactive UI, Portfolio Showcase",
>>>>>>> 505c90f31e9b8485c3b5aff376b047970e943c98
    image: "/images/whatsapp.png",
    link: "#",
  },
  {
    title: "Cybersecurity Learning Lab",
    category:
<<<<<<< HEAD
      "A hands-on learning environment for practicing Linux, networking, system administration, and blue team cybersecurity concepts.",
    tools: "Linux, Networking, TryHackMe, Wireshark",
=======
      "A personal cybersecurity practice environment for Linux, networking, and SOC analysis training.",
    tools: "Linux, Networking, Threat Detection, Log Analysis, SOC Fundamentals",
>>>>>>> 505c90f31e9b8485c3b5aff376b047970e943c98
    image: "/images/broki.png",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
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
