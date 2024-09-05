import linkedinLogo from "../../assets/linkedin.png";
import emailLogo from "../../assets/email.png";

const Contact = () => (
  <section id="contact">
    <p className="section__text__p1">Hör gärna av dig</p>
    <h1 className="title">Kontakt</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src={emailLogo}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p>
          <a href="mailto:marinarosenstiel@hotmail.com">
            marinarosenstiel@hotmail.com
          </a>
        </p>
      </div>
      <div className="contact-info-container">
        <img
          src={linkedinLogo}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p>
          <a href="https://se.linkedin.com/in/marina-rosenstiel-875bb7152">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
