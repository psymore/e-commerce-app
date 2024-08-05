import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopMenu from "./components/TabMenu";
import TopBar from "./components/TopBar";
import CategoryPage from "./config/categoryRouteConfig";
import AllProducts from "./pages/AllProducts";
import useThemeStore from "./store/themeStore";

function App() {
  const { themeMode } = useThemeStore();

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Router>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>

          <Grid item xs={12}>
            <TopMenu />
          </Grid>

          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
