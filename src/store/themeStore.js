// store/themeStore.js
import { create } from "zustand";
import { darkTheme, lightTheme } from "../themes";

const THEME_KEY = "themePreference";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "light") return lightTheme;
  return darkTheme;
};

const useThemeStore = create(set => ({
  theme: getInitialTheme(),
  setDarkTheme: () => {
    localStorage.setItem(THEME_KEY, "dark");
    set({ theme: darkTheme });
  },
  setLightTheme: () => {
    localStorage.setItem(THEME_KEY, "light");
    set({ theme: lightTheme });
  },
  toggleTheme: currentTheme => {
    const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    localStorage.setItem(THEME_KEY, newTheme === darkTheme ? "dark" : "light");
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
