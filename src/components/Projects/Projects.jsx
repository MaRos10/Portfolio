import { useRef, useState, useEffect } from "react";
import sportwebsite from "../../assets/sportwebsite.png";
import solaris from "../../assets/solaris.png";
import memory from "../../assets/memory.png";
import timerapp from "../../assets/timerapp.png";
import pinboard from "../../assets/pinboard.png";
import illusite from "../../assets/illusite.png";
import arrow from "../../assets/arrow.png";

const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
      checkScroll();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isMobile && <p className="swipe-hint"> och svep för att bläddra 👆🏼</p>}
      <div className="projects-wrapper">
        {!isMobile && (
          <button
            className={`scroll-btn left ${!canScrollLeft ? "disabled" : ""}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            &lt;
          </button>
        )}

        <div className="projects-container" ref={scrollRef}>
          {[
            {
              img: illusite,
              title: "Illusite",
              github: "https://github.com/MaRos10/Illusite",
              demo: "https://maros10.github.io/Illusite/",
              desc: "En webbplats för ett fiktivt illustratörsföretag, byggd med React och modern responsiv design. Innehåller en landingvy, en sektion för tjänster, en FAQ-sektion och ett kontaktformulär.",
            },
            {
              img: timerapp,
              title: "Timer App",
              github: "https://github.com/MaRos10/IntervalApp",
              demo: "https://maros10.github.io/IntervalApp/",
              desc: "Timer App, byggd för mobil, där användare kan starta timer, ställa in intervaller, ta pauser och växla mellan analog, digital och textvy.",
            },
            {
              img: pinboard,
              title: "Pinboard",
              github: "https://github.com/MaRos10/Shui",
              demo: "http://shui-pinboard.s3-website.eu-north-1.amazonaws.com/",
              desc: "En anslagstavla byggd med React och ett serverless API i AWS. Användare kan posta, ändra och ta bort meddelanden. Frontend hostad i en S3-bucket och backend byggd med API Gateway, Lambda och DynamoDB.",
            },
            /*             {
              img: solaris,
              title: "Solaris",
              github: "https://github.com/MaRos10/Solaris",
              demo: "https://maros10.github.io/Solaris/",
              desc: "En webbsida om solsystemet där datan hämtas via API och användaren kan få info om planeter.",
            }, */
            {
              img: memory,
              title: "Memory",
              github: "https://github.com/MaRos10/Memory",
              demo: "https://maros10.github.io/Memory/",
              desc: "Ett memoryspel med fruktmotiv där kort blandas med Fisher-Yates-algoritmen. Ett av de första projekten med Javascript som jag byggde.",
            },
            /*             {
              img: sportwebsite,
              title: "Sport Website",
              github: "https://github.com/MaRos10/Sport-Website",
              demo: "https://maros10.github.io/Sport-Website/",
              desc: "Hemsida för fiktiv idrottsförening med interaktiv matchkalender, bildkarusell och karta.",
            }, */
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

        {!isMobile && (
          <button
            className={`scroll-btn right ${!canScrollRight ? "disabled" : ""}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            &gt;
          </button>
        )}
      </div>
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
