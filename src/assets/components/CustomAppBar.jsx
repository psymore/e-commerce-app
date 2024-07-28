// components/AppBar.js
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggle from "./ThemeToggle";

const CustomAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "8vh" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
