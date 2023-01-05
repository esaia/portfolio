import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Toggle from "react-styled-toggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDarkMode, setisDarkMode] = useState(theme === "dark" ? true : false);

  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const changeTheme = (e) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setisDarkMode(!isDarkMode);

    return isDarkMode;
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.style = "transition: none !important";
      document.body.style = "background: rgb(12, 11, 21);";
    } else {
      document.body.style = "transition: all 0.5s";
      document.body.style = "background: #ffffff;";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <div className="mainApp">
        <motion.div
          className="textwrap"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 4,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="glitch" data-text="HEY, I'm ESAIA GAPRINDASHILI">
            HEY, I'm ESAIA GAPRINDASHVILI
          </div>

          <p className="text">
            Highly trained in web development. Skilled in frontend
            <span className="text-dec">programming languages.</span> I have
            worked on various projects, with JavaScript, React, NodeJS. looking
            for an opportunity to extend my
            <span className="text-dec">competence</span> with working an
            experienced web development team. I am hard worker and motivated to
            learn more and improve my skills in web development.
          </p>

          <div className=" linksdiv ">
            <p onClick={() => setShowProjects(true)} href="/">
              - PROJECTS
            </p>
            <p onClick={() => setShowSkills(true)}>- MY SKILLS</p>
          </div>

          <div className="icons">
            <a
              href="https://www.facebook.com/esaia.gafrindashvili/"
              target="_blank"
            >
              <FaFacebookSquare
                fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"}
              />
            </a>
            <a href="https://github.com/esaia" target="_blank">
              <FaGithub
                fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/esaia-gaprindashvili-7219771a9/"
              target="_blank"
            >
              <FaLinkedin
                fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"}
              />
            </a>
          </div>

          <Toggle
            onChange={changeTheme}
            checked={theme === "light" ? false : true}
            value={theme}
            width={40}
            height={20}
            sliderWidth={12}
            sliderHeight={12}
            translate={19}
            backgroundColorChecked="#1d3147"
            backgroundColorUnchecked="#e1e3e5"
            labelLeft={isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
          />
        </motion.div>

        <h5 className="background_text">HELLO THERE</h5>

        <AnimatePresence>
          {showProjects && (
            <Projects
              isDarkMode={isDarkMode}
              showProjects={showProjects}
              setShowProjects={setShowProjects}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSkills && (
            <Skills isDarkMode={isDarkMode} setShowSkills={setShowSkills} />
          )}
        </AnimatePresence>

        <AnimatedCursor
          innerSize={5}
          outerSize={30}
          innerScale={10}
          outerScale={0}
          outerAlpha={0}
          hasBlendMode={false}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          outerStyle={{
            border: "1px solid gray",
          }}
          innerStyle={{
            backgroundColor: "#B8B1B6",
          }}
        />
      </div>
    </div>
  );
}

export default App;

// <AnimatedCursor
//   innerSize={3}
//   outerSize={10}
//   innerScale={20}
//   outerScale={1}
//   outerAlpha={0}
//   outerStyle={{
//     border: "1px solid gray",
//   }}
//   innerStyle={{
//     backgroundColor: "gray",
//   }}
// />;
