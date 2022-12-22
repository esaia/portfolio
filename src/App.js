import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Toggle from "react-styled-toggle";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDarkMode, setisDarkMode] = useState(theme === "dark" ? true : false);

  const [showProjects, setShowProjects] = useState(false);

  const changeTheme = (e) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setisDarkMode(!isDarkMode);
    return isDarkMode;
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const showProjectsDiv = () => {
    setShowProjects(!showProjects);
  };

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
            worked on various projects, with JavaScript, React. I also have
            experience in WordPress development.
          </p>

          <div className=" linksdiv ">
            <p onClick={showProjectsDiv} href="/">
              - PROJECTS
            </p>
            <p href="/">- MY SKILLS</p>
          </div>

          <div className="icons">
            <FaFacebookSquare
              fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"}
            />
            <FaGithub fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"} />
            <FaLinkedin
              fill={theme === "dark" ? "white" : "rgb(12, 11, 21);"}
            />
          </div>

          <Toggle
            onChange={changeTheme}
            defaultChecked={theme === "light" ? true : false}
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

        {/* <h5 className="background_text">HELLO THERE</h5> */}

        <AnimatePresence>
          {showProjects && (
            <Projects
              showProjectsDiv={showProjectsDiv}
              isDarkMode={isDarkMode}
            />
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
