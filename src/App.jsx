import React from "react";
import "./App.css";
import "./Mediaqueries.css";
import Nav from "./components/Nav/Nav";
import HamburgerNav from "./components/HamburgerNav/HamburgerNav";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <HamburgerNav />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
