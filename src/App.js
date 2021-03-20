import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import moduleName from "./Pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>aaa</div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>{/* <About /> */}</Route>
          <Route path='/dashboard'>{/* <Dashboard /> */}</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
