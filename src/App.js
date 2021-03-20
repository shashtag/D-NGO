import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/SignInpage/SignInpage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/LoginAndSignup' component={SignInPage} />
          {/* <Route path='/dashboard'><Dashboard /></Route> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
