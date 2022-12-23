import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import "./projects.scss";

const Skills = ({ setShowSkills, isDarkMode }) => {
  return (
    <motion.div
      className={`projectmain ${isDarkMode ? "dark" : "light"}`}
      initial={{ opacity: 0.3, bottom: -1000 }}
      animate={{ opacity: 1, bottom: 0 }}
      exit={{ opacity: 0.4, bottom: -900 }}
      transition={{
        default: {
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 9,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="projectsWrap">
        <FaWindowClose
          className="exitIcon"
          fill="white"
          onClick={() => setShowSkills(false)}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
