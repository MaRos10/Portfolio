const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">Utbildning</a>
            </li>
            <li>
              <a href="#experience">Techstack</a>
            </li>
            <li>
              <a href="#projects">Projekt</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
      <p> &#169; {currentYear} Marina Rosenstiel</p>
    </footer>
  );
};

export default Footer;
