import React, { createContext, useContext, useState } from 'react';

const themeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export default ThemeContext;

export const useThemeContext = () => {
  const { theme, setTheme } = useContext(themeContext);

  return {
    theme,
    setTheme,
  };
};
