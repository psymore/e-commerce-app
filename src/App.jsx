import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomAppBar from "./assets/components/CustomAppBar";
import Home from "./assets/pages/Home";
import useThemeStore from "./store/themeStore";

function App() {
  const { theme, setDarkTheme } = useThemeStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container>
        <Typography fontSize={40}>BABAAAA SELAMIN ALEYKÜM</Typography>
        <Grid item xs={12} fullWidth>
          <CustomAppBar />
        </Grid>
        <Home />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
