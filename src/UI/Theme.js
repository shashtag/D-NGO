import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: { primary: { main: "#F8F8F8" }, secondary: { main: "#1F78FF" } },
  typography: {
    h1: { fontWeight: "bold;", fontSize: "5rem" },
    h2: { fontWeight: "bold;" },
  },
});
console.log(theme);

export default theme;
