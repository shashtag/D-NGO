import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#F8F8F8" },
    secondary: { main: "#1F78FF" },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    // h1: { fontWeight: "bold;", fontSize: "4rem" },
    h2: { fontWeight: "bold;" },
  },
});
console.log(theme);

export default theme;
