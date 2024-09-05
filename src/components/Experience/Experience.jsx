import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import javascriptLogo from "../../assets/javascript.svg";
import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/nodejs.svg";
import figmaLogo from "../../assets/figma.svg";
import csharpLogo from "../../assets/csharp.svg";
import gitLogo from "../../assets/git.svg";
import githubLogo from "../../assets/github.png";
import scrumLogo from "../../assets/scrum.svg";

const Experience = () => (
  <section id="experience">
    <p className="section__text__p1">Utforska min</p>
    <h1 className="title">Techstack</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          {/* <h2 className="experience-sub-title">Techstack</h2> */}
          <div className="article-container">
            <article>
              <img src={htmlLogo} alt="HTML" className="icon" />
              <div>
                <h3 className="tech-title">HTML</h3>
              </div>
            </article>
            <article>
              <img src={cssLogo} alt="CSS" className="icon" />
              <div>
                <h3 className="tech-title">CSS</h3>
              </div>
            </article>
            <article>
              <img src={javascriptLogo} alt="JavaScript" className="icon" />
              <div>
                <h3 className="tech-title">JavaScript</h3>
              </div>
            </article>
            <article>
              <img src={reactLogo} alt="React" className="icon" />
              <div>
                <h3 className="tech-title">React </h3>
              </div>
            </article>
            <article>
              <img src={nodeLogo} alt="Node.js" className="icon" />
              <div>
                <h3 className="tech-title">Node.js</h3>
              </div>
            </article>
            <article>
              <img src={figmaLogo} alt="Git" className="icon" />
              <div>
                <h3 className="tech-title">Figma</h3>
              </div>
            </article>
            <article>
              <img src={csharpLogo} alt="C-sharp" className="icon" />
              <div>
                <h3 className="tech-title">C#</h3>
              </div>
            </article>
            <article>
              <img src={gitLogo} alt="Git" className="icon" />
              <div>
                <h3 className="tech-title">Git</h3>
              </div>
            </article>
            <article>
              <img src={githubLogo} alt="GitHub" className="icon" />
              <div>
                <h3 className="tech-title">GitHub</h3>
              </div>
            </article>
            <article>
              <img src={scrumLogo} alt="Scrum" className="icon" />
              <div>
                <h3 className="tech-title">Scrum</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img
      src="src/assets/arrow.png"
      alt="arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = "./#projects")}
    />
  </section>
);

export default Experience;
