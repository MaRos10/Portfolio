const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

const HamburgerNav = () => (
  <nav id="hamburger-nav">
    <div className="logo">Marina Rosenstiel</div>
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-links">
        <li>
          <a href="#about" onClick={toggleMenu}>
            Utbildning
          </a>
        </li>
        <li>
          <a href="#experience" onClick={toggleMenu}>
            Techstack
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projekt
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Kontakt
          </a>
        </li>
      </div>
    </div>
  </nav>
);

export default HamburgerNav;
