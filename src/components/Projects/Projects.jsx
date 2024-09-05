import sportwebsite from "../../assets/sportwebsite.png";
import solaris from "../../assets/solaris.png";
import memory from "../../assets/memory.png";

const Projects = () => (
  <section id="projects">
    <p className="section__text__p1">Kika på mina</p>
    <h1 className="title">Projekt</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={sportwebsite}
              alt="Sport Website"
              className="project-img"
            />
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

        <div className="details-container color-container">
          <div className="article-container">
            <img src={solaris} alt="Solaris" className="project-img" />
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

        <div className="details-container color-container">
          <div className="article-container">
            <img src={memory} alt="Memory" className="project-img" />
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
    <img
      src="src/assets/arrow.png"
      alt="arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = "./#contact")}
    />
  </section>
);

export default Projects;
