import { useMemo, useState } from 'react';
import Toggle from 'react-styled-toggle';

import { socialLinks } from '../data';

import { FaLaravel, FaReact, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiNuxtdotjs, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Home = () => {
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const { theme, setTheme } = useThemeContext();
  const [isDarkMode, setisDarkMode] = useState(theme === 'dark' ? true : false);

  const changeTheme = (e) => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');

    localStorage.setItem('theme', theme !== 'dark' ? 'dark' : 'light');

    setisDarkMode(theme !== 'dark');

    return !isDarkMode;
  };

  const technologies = useMemo(
    () => [
      { name: 'Typescript', icon: <SiTypescript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next JS', icon: <SiNextdotjs /> },
      { name: 'React Native', icon: <TbBrandReactNative /> },
      { name: 'Vue JS', icon: <FaVuejs /> },
      { name: 'Nuxt', icon: <SiNuxtdotjs /> },
      { name: 'Laravel', icon: <FaLaravel /> },
    ],
    []
  );

  return (
    <div className="home">
      <div
        className="home__textwrap"
        // initial={{ opacity: 1, scale: 1 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{
        //   type: 'spring',
        //   damping: 4,
        //   stiffness: 100,
        //   restDelta: 0.001,
        // }}
      >
        <div className="glitch" data-text="HEY, I'm ESAIA GAPRINDASHVILI">
          HEY, I'm ESAIA GAPRINDASHVILI
        </div>

        <p className="home__textwrap-text">
          Highly trained in web & mobile development. Skilled in frontend & backend
          <span className="home__textwrap-text--dec">programming languages</span>. I have worked on various projects,
          with:
        </p>

        <ul className="home__textwrap-list">
          {technologies.map((tech, index) => (
            <li key={index}>
              <TextIcon name={tech.name} icon={tech.icon} />
            </li>
          ))}
        </ul>

        <p className="home__textwrap-text">
          looking for an opportunity to extend my
          <span className="home__textwrap-text--dec">competence</span> with working an experienced web development team.
        </p>

        <div className="home__textwrap-projects ">
          <Link to={'/projects'} className="home__textwrap-projects--link">
            - PROJECTS
          </Link>
          <Link to={'/skills'} className="home__textwrap-projects--link">
            - MY SKILLS
          </Link>
        </div>

        <div className="home__textwrap-icons">
          {socialLinks.map((item) => {
            return (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="home__textwrap-icons--link"
                key={item.link}
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <div className="home__textwrap-darkModeToogle">
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
      </div>

      {/* <AnimatePresence>
          {showProjects && <Projects showProjects={showProjects} setShowProjects={setShowProjects} />}
        </AnimatePresence>

        <AnimatePresence>{showSkills && <Skills setShowSkills={setShowSkills} />}</AnimatePresence> */}

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
  );
};

export default Home;

const TextIcon = ({ icon, name }) => {
  return (
    <>
      <div className="home__textwrap-list--icon">{icon}</div>
      <p>{name}</p>
    </>
  );
};
