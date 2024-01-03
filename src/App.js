import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Toggle from 'react-styled-toggle';

import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { socialLinks } from './data';

import { FaLaravel, FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNuxtdotjs, SiNextdotjs } from 'react-icons/si';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isDarkMode, setisDarkMode] = useState(theme === 'dark' ? true : false);

  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const changeTheme = (e) => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');

    localStorage.setItem('theme', theme !== 'dark' ? 'dark' : 'light');

    setisDarkMode(theme !== 'dark');

    return !isDarkMode;
  };

  return (
    <div className={`${theme}`}>
      <div className="mainApp">
        <motion.div
          className="mainApp__textwrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            scale: {
              type: 'spring',
              damping: 4,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="glitch" data-text="HEY, I'm ESAIA GAPRINDASHVILI">
            HEY, I'm ESAIA GAPRINDASHVILI
          </div>

          <p className="mainApp__textwrap-text">
            Highly trained in web development. Skilled in frontend & backend
            <span className="mainApp__textwrap-text--dec">programming languages</span>. I have worked on various
            projects, with:
          </p>

          <ul className="mainApp__textwrap-list">
            <li>
              <SiTypescript className="mainApp__textwrap-text--icon" /> Typescript,{' '}
            </li>
            <li>
              <FaReact className="mainApp__textwrap-text--icon" /> React,{' '}
            </li>
            <li>
              <SiNextdotjs className="mainApp__textwrap-text--icon" /> Next JS,{' '}
            </li>
            <li>
              <FaVuejs className="mainApp__textwrap-text--icon" /> Vue JS,{' '}
            </li>
            <li>
              <SiNuxtdotjs className="mainApp__textwrap-text--icon" /> Nuxt,{' '}
            </li>
            <li>
              <FaNodeJs className="mainApp__textwrap-text--icon" /> Node JS,{' '}
            </li>
            <li>
              <FaLaravel className="mainApp__textwrap-text--icon" /> laravel.
            </li>
          </ul>

          <p className="mainApp__textwrap-text">
            looking for an opportunity to extend my
            <span className="mainApp__textwrap-text--dec">competence</span> with working an experienced web development
            team. I am hard worker and motivated to learn more and improve my skills in web development.
          </p>

          <div className="mainApp__textwrap-projects ">
            <p onClick={() => setShowProjects(true)}>- PROJECTS</p>
            <p onClick={() => setShowSkills(true)}>- MY SKILLS</p>
          </div>

          <div className="mainApp__textwrap-icons">
            {socialLinks.map((item) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mainApp__textwrap-icons--link"
                  key={item.link}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>

          <div className="mainApp__textwrap-darkModeToogle">
            <Toggle
              checked={theme === 'light' ? false : true}
              onChange={changeTheme}
              value={theme}
              width={40}
              height={20}
              sliderWidth={12}
              sliderHeight={12}
              translate={19}
              backgroundColorChecked="#1d3147"
              backgroundColorUnchecked="#e1e3e5"
              labelLeft={isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
            />
          </div>
        </motion.div>

        <h5 className="mainApp-background_text">HELLO THERE</h5>

        <AnimatePresence>
          {showProjects && <Projects showProjects={showProjects} setShowProjects={setShowProjects} />}
        </AnimatePresence>

        <AnimatePresence>{showSkills && <Skills setShowSkills={setShowSkills} />}</AnimatePresence>

        {/* 
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
        /> */}
      </div>
    </div>
  );
}

export default App;
