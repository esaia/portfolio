import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import "./projects.scss";
import "./skills.scss";

const Skills = ({ setShowSkills, isDarkMode }) => {
  return (
    <motion.div
      className={`projectmain ${isDarkMode ? "dark" : "light"}`}
      initial={{ opacity: 0.4, bottom: -1000 }}
      animate={{ opacity: 1, bottom: 0 }}
      exit={{ opacity: 0.4, bottom: -900 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <div className="projectsWrap">
        <FaWindowClose
          className="exitIcon"
          fill="white"
          onClick={() => setShowSkills(false)}
        />
        <div className="skillsDiv  ">
          <h2>HTML5</h2>
          <h2>CSS3</h2>
          <h2>JavaScript</h2>
          <h2>React Js</h2>
          <h2>TypeScript</h2>
          <h2>Redux</h2>
          <h2>Next JS</h2>
          <h2>Tailwind Css</h2>
          <h2>scss</h2>
          <h2>styled components</h2>
          <h2>node js</h2>
          <h2>Express</h2>
          <h2>Firebase</h2>
          <h2>mango db</h2>
          <h2>Mysql</h2>
          <h2>git</h2>
          <h2>github</h2>
          <h2>WordPress</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
