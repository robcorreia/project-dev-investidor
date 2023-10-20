import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d3436",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#55efc4"
      // contrastText: "#ffffff"
    }
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary"
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
        }
      }
    }
  }
});

window["theme"] = theme;

export default theme;
