import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/about'>{/* <About /> */}</Route>
          <Route path='/dashboard'>{/* <Dashboard /> */}</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
