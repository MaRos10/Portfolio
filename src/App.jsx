import React from "react";
import { motion } from "framer-motion";
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

const animationSettings = {
  whileInView: { opacity: 1, y: 0, scale: 1 },
  initial: { opacity: 0, y: 30, scale: 0.95 },
  transition: { duration: 0.7, ease: "easeOut" },
};

function App() {
  return (
    <div className="App">
      <Nav />
      <HamburgerNav />

      <motion.div {...animationSettings}>
        <Profile />
      </motion.div>

      <motion.div {...animationSettings}>
        <About />
      </motion.div>

      <motion.div {...animationSettings}>
        <Experience />
      </motion.div>

      <motion.div {...animationSettings}>
        <Projects />
      </motion.div>

      <motion.div {...animationSettings}>
        <Contact />
      </motion.div>

      {/*       <motion.section
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Profile />
      </motion.section>

      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Experience />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Projects />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Contact />
      </motion.div> */}

      <Footer />
    </div>
  );
}

export default App;
