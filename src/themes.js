// themes.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c1a23",
    },
    primary: {
      main: "#152a3d",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "#bbbbbb",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
          color: "#fff",
          "&.Mui-selected": {
            color: "#ffa500",
            backgroundColor: "#2a3d4e",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "#152a3d",
        },
      },
    },
  },
});

const lightTheme = createTheme({
  // palette: {
  //   mode: "light",
  //   background: {
  //     default: "#ffffff",
  //   },
  //   primary: {
  //     main: "#1976d2",
  //   },
  // },
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         color: "#000",
  //       },
  //     },
  //   },
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "#fff",
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         ":hover": {
  //           color: "#fff",
  //           backgroundColor: "#1b079c",
  //         },
  //         backgroundColor: "#152a3d",
  //         color: "#fff",
  //       },
  //     },
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "#fff",
  //       },
  //     },
  //   },
  //   // MuiTab: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       backgroundColor: "#deebfe",
  //   //       "&.Mui-selected": {
  //   //         // border: "1px solid #2a3d4e",
  //   //       },
  //   //       "&:focus": {},
  //   //       disableRipple: true,
  //   //       "&.Mui-focusVisible": {
  //   //         // border: "1px solid #2a3d4e",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // MuiTabs: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       backgroundColor: "#deebfe",
  //   //     },
  //   //   },
  //   // },
  // },
});

export { darkTheme, lightTheme };
