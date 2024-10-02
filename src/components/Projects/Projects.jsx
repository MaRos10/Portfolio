import sportwebsite from "../../assets/sportwebsite.png";
import solaris from "../../assets/solaris.png";
import memory from "../../assets/memory.png";

const Projects = () => (
  <section id="projects">
    <p className="section__text__p1">Kika på mina</p>
    <h1 className="title">Projekt</h1>
    <p className="section__text__p1">
      <br /> Klicka på bilden för att läsa mer
    </p>
    <div className="experience-details-container">
      <div className="about-containers">
        {/* Sport Website Project */}
        <div className="details-container color-container">
          <div
            className="article-container project-card"
            onClick={(e) => e.currentTarget.classList.toggle("flipped")}
          >
            <div className="front">
              <img
                src={sportwebsite}
                alt="Sport Website"
                className="project-img"
              />
            </div>
            <div className="back">
              <p className="project-text">
                Hemsida för fiktiv idrottsförening innehållandes en interaktiv
                matchkalender, bildkarusell samt en inbäddad karta som visar
                vägbeskrivning till arenan
              </p>
            </div>
          </div>
          <h2 className="experience-sub-title project-title">Sport Website</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/MaRos10/Sport-Website")
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://maros10.github.io/Sport-Website/")
              }
            >
              Live Demo
            </button>
          </div>
        </div>

        {/* Solaris Project */}
        <div className="details-container color-container">
          <div
            className="article-container project-card"
            onClick={(e) => e.currentTarget.classList.toggle("flipped")}
          >
            <div className="front">
              <img src={solaris} alt="Solaris" className="project-img" />
            </div>
            <div className="back">
              <p className="project-text">
                En webbsida om vårt solsystem där datan hämtas genom API. Genom
                att klicka på eller söka efter planet får man mer information om
                den
              </p>
            </div>
          </div>
          <h2 className="experience-sub-title project-title">Solaris</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open("https://github.com/MaRos10/Solaris")}
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open("https://maros10.github.io/Solaris/")}
            >
              Live Demo
            </button>
          </div>
        </div>

        {/* Memory Project */}
        <div className="details-container color-container">
          <div
            className="article-container project-card"
            onClick={(e) => e.currentTarget.classList.toggle("flipped")}
          >
            <div className="front">
              <img src={memory} alt="Memory" className="project-img" />
            </div>
            <div className="back">
              <p className="project-text">
                Spelare matchar kort med fruktmotiv genom att klicka på dem.
                Tekniker inkluderar DOM-manipulering, eventhantering och
                Fisher-Yates-algoritmen för att blanda kort. Spelet avslutas när
                alla par är matchade
              </p>
            </div>
          </div>
          <h2 className="experience-sub-title project-title">Memory</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open("https://github.com/MaRos10/Memory")}
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open("https://maros10.github.io/Memory/")}
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Arrow Icon */}
    <img
      src="src/assets/arrow.png"
      alt="arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = "./#contact")}
    />
  </section>
);

export default Projects;
