import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import profileImg from "../../assets/profilepic.jpg";

const Profile = () => (
  <section id="profile">
    <div className="section__pic-container">
      <img src={profileImg} alt="profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hej, jag heter</p>
      <h1 className="title">Marina</h1>
      <p className="section__text__p2">& studerar till Frontendutvecklare</p>
      <p className="about-text">
        Välkommen till min sida! Här får du en överblick över min utbildning,
        min techstack och några av mina projekt
      </p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => window.open("src/assets/CV.pdf")}
        >
          Ladda ner CV
        </button>
        <button
          className="btn btn-color-1"
          onClick={() => (window.location.href = "./#contact")}
        >
          Kontakt
        </button>
      </div>
      <div id="socials-container">
        <img
          src={linkedinLogo}
          alt="My LinkedIn"
          className="icon"
          onClick={() =>
            window.open(
              "https://se.linkedin.com/in/marina-rosenstiel-875bb7152",
              "_blank"
            )
          }
        />
        <img
          src={githubLogo}
          alt="My GitHub"
          className="icon"
          onClick={() => window.open("https://github.com/MaRos10")}
        />
      </div>
    </div>
  </section>
);

export default Profile;
