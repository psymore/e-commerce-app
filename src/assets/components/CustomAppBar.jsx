// components/AppBar.js
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggle from "./ThemeToggle";

const CustomAppBar = () => {
  return (
    <AppBar position="static" sx={{ height: "8vh" }}>
      <Typography
        sx={{
          color: "#fff",
          p: 3,
          fontSize: "14px",
          fontStyle: "oblique",
          fontFamily: "cursive",
          fontWeight: "500",
        }}>
        fakestoreapi.com
      </Typography>
      <Toolbar>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
