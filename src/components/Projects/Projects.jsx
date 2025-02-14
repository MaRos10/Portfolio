/* import { useRef } from "react";
import sportwebsite from "../../assets/sportwebsite.png";
import solaris from "../../assets/solaris.png";
import memory from "../../assets/memory.png";
import timerapp from "../../assets/timerapp.png";
import pinboard from "../../assets/pinboard.png";
import arrow from "../../assets/arrow.png";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Kika på mina</p>
      <h1 className="title">Projekt</h1>
      <p className="section__text__p1">
        <br /> Klicka på bilden för att läsa mer
      </p>

      {/* Scrollbar *
      <div className="projects-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="projects-container" ref={scrollRef}>
          {[
            {
              img: pinboard,
              title: "Pinboard",
              github: "https://github.com/MaRos10/Shui",
              demo: "http://shui-pinboard.s3-website.eu-north-1.amazonaws.com/",
              desc: "En anslagstavla byggd med React och ett serverless API i AWS. Användare kan posta, ändra och se meddelanden. Frontend hostad i en S3-bucket och backend byggd med API Gateway, Lambda och DynamoDB.",
            },
            {
              img: timerapp,
              title: "Timer App",
              github: "https://github.com/MaRos10/IntervalApp",
              demo: "https://maros10.github.io/IntervalApp/",
              desc: "Timer App där användare kan starta timer, ställa in intervaller, ta pauser och växla mellan analog, digital och textvy.",
            },
            {
              img: solaris,
              title: "Solaris",
              github: "https://github.com/MaRos10/Solaris",
              demo: "https://maros10.github.io/Solaris/",
              desc: "En webbsida om solsystemet där datan hämtas via API och användaren kan få info om planeter.",
            },
            {
              img: memory,
              title: "Memory",
              github: "https://github.com/MaRos10/Memory",
              demo: "https://maros10.github.io/Memory/",
              desc: "Ett memoryspel med fruktmotiv där kort blandas med Fisher-Yates-algoritmen.",
            },
            {
              img: sportwebsite,
              title: "Sport Website",
              github: "https://github.com/MaRos10/Sport-Website",
              demo: "https://maros10.github.io/Sport-Website/",
              desc: "Hemsida för fiktiv idrottsförening med interaktiv matchkalender, bildkarusell och karta.",
            },
          ].map((project, index) => (
            <div key={index} className="details-container color-container">
              <div
                className="article-container project-card"
                onClick={(e) => e.currentTarget.classList.toggle("flipped")}
              >
                <div className="front">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
                <div className="back">
                  <p className="project-text">{project.desc}</p>
                </div>
              </div>
              <h2 className="experience-sub-title project-title">
                {project.title}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.github)}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.demo)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>

      {/* Arrow Icon 
      <img
        src={arrow}
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
 */

import { useRef, useState } from "react";
import sportwebsite from "../../assets/sportwebsite.png";
import solaris from "../../assets/solaris.png";
import memory from "../../assets/memory.png";
import timerapp from "../../assets/timerapp.png";
import pinboard from "../../assets/pinboard.png";
import arrow from "../../assets/arrow.png";

const Projects = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      img: pinboard,
      title: "Pinboard",
      github: "https://github.com/MaRos10/Shui",
      demo: "http://shui-pinboard.s3-website.eu-north-1.amazonaws.com/",
      desc: "En anslagstavla byggd med React och ett serverless API i AWS. Användare kan posta, ändra och se meddelanden. Frontend hostad i en S3-bucket och backend byggd med API Gateway, Lambda och DynamoDB.",
    },
    {
      img: timerapp,
      title: "Timer App",
      github: "https://github.com/MaRos10/IntervalApp",
      demo: "https://maros10.github.io/IntervalApp/",
      desc: "Timer App där användare kan starta timer, ställa in intervaller, ta pauser och växla mellan analog, digital och textvy.",
    },
    {
      img: solaris,
      title: "Solaris",
      github: "https://github.com/MaRos10/Solaris",
      demo: "https://maros10.github.io/Solaris/",
      desc: "En webbsida om solsystemet där datan hämtas via API och användaren kan få info om planeter.",
    },
    {
      img: memory,
      title: "Memory",
      github: "https://github.com/MaRos10/Memory",
      demo: "https://maros10.github.io/Memory/",
      desc: "Ett memoryspel med fruktmotiv där kort blandas med Fisher-Yates-algoritmen.",
    },
    {
      img: sportwebsite,
      title: "Sport Website",
      github: "https://github.com/MaRos10/Sport-Website",
      demo: "https://maros10.github.io/Sport-Website/",
      desc: "Hemsida för fiktiv idrottsförening med interaktiv matchkalender, bildkarusell och karta.",
    },
  ];

  const scroll = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Kika på mina</p>
      <h1 className="title">Projekt</h1>
      <p className="section__text__p1">
        <br /> Klicka på bilden för att läsa mer
      </p>

      {/* Scrollbar */}
      <div className="projects-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="projects-container" ref={scrollRef}>
          <div
            className="projects-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease",
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="details-container color-container">
                <div
                  className="article-container project-card"
                  onClick={(e) => e.currentTarget.classList.toggle("flipped")}
                >
                  <div className="front">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-img"
                    />
                  </div>
                  <div className="back">
                    <p className="project-text">{project.desc}</p>
                  </div>
                </div>
                <h2 className="experience-sub-title project-title">
                  {project.title}
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.github)}
                  >
                    GitHub
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.demo)}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>

      {/* Arrow Icon */}
      <img
        src={arrow}
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
