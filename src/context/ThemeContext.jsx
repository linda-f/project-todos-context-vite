import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ changeMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};