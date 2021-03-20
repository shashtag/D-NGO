import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import LandingPage from "./Pages/LandingPage";
import Hospital from "./Pages/Hospital";
import Payment from "./Pages/Payment";
import SignInPage from "./Pages/SignInpage/SignInpage";
import Navbar from "./Components/Navbar";
import Pay from "./Pages/Pay/Pay";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Navbar />
            <LandingPage />
          </Route>
          <Route path='/hospital' exact>
            <Navbar />
            <Hospital />
          </Route>
          <Route path='/payment' exact>
            <Navbar />
            <Payment />
          </Route>
          <Route path='/LoginAndSignup' component={SignInPage} />
          <Route path='/Pay' component={Pay} />
          {/* <Route path='/dashboard'><Dashboard /></Route> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
