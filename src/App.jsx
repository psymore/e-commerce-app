import { CssBaseline, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomAppBar from "./assets/components/CustomAppBar";
import TopMenu from "./assets/components/TabMenu";
import AllProducts from "./assets/pages/AllProducts";
import useThemeStore from "./store/themeStore";

function App() {
  const { themeMode } = useThemeStore();

  return (
    // <RouterProvider>
    <ThemeProvider theme={themeMode}>
      <CssBaseline />

      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <CustomAppBar />
        </Grid>

        <Grid item xs={12}>
          <TopMenu />
        </Grid>
        <AllProducts />
      </Grid>
    </ThemeProvider>
    // </RouterProvider>
  );
}

export default App;
