

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#062748",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#2dd4bf",
      dark: "#14b8a6",
      contrastText: "#ffffff",
    },

    info: {
      main: "#3b82f6",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#0c0b0b",
      secondary: "#393838",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",

    fontSize: 16,

    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  
  

    h1: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.15,
    },

    h2: {
      fontSize: "40px",
      fontWeight: 700,
    },

    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          margin: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          boxSizing: "border-box",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight:600,
          textTransform: "none",
          minWidth:"auto"
        },
      },
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          boxShadow:"none"
        }
      }
    },

    MuiCard:{
      styleOverrides:{
        root:{
          overflow:"hidden",
        }
      }
    }
  },
});

export default theme;