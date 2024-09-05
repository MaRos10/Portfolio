import experienceIkon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";
import officePic from "../../assets/sarah-dorweiler-qddLJnd51bU-unsplash.jpg";

const About = () => (
  <section id="about">
    <h1 className="title">Utbildning</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img src={officePic} alt="Profile picture" className="about-pic" />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src={experienceIkon} alt="experience icon" className="icon" />
            <h3>Avklarade kurser</h3> <br />
            <p className="subjects">
              - Introduktion till IT-branschen och frontendutveckling <br /> -
              UX/UI grunder <br /> - HTML & CSS <br />
              - Introduktion till programmering och datalogiskt tänkande <br />
              - JavaScript med ES6+ <br /> - Arbeta agilt <br />-
              Frontend-ramverk <br />- Backend med Node.js
            </p>
          </div>
          <div className="details-container">
            <img src={educationIcon} alt="education icon" className="icon" />
            <h3>Kommande kurser</h3> <br />
            <p className="subjects">
              - Utvecklingsmiljöer och driftsättning <br />
              - UX/UI fördjupning <br /> - Fullstack webbapplikation <br /> -
              Lärande i arbete (LIA) 1 <br /> - Examensarbete <br /> - Lärande i
              arbete (LIA) 2
            </p>
          </div>
        </div>
      </div>
      <img
        src="src/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </div>
  </section>
);

export default About;
