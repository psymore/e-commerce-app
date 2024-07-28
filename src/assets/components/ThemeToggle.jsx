// components/ThemeToggle.js
import Button from "@mui/material/Button";
import useThemeStore from "../../store/themeStore";
import { darkTheme } from "../../themes";
import { Typography } from "@mui/material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  const handleToggle = () => {
    toggleTheme(theme);
  };

  return (
    <Button
      onClick={handleToggle}
      sx={{ color: theme === darkTheme ? "#000" : "#fff" }}>
      <Typography sx={{ color: theme === darkTheme ? "#000" : "#fff" }}>
        {theme === darkTheme ? "Light Mode" : "Dark Mode"}
      </Typography>
    </Button>
  );
};

export default ThemeToggle;
