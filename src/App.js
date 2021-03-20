import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/SignInpage/SignInpage";

function App() {
  return (
    <ThemeProvider theme={theme}>

      
      <Router>
        <div className='App'>aaa</div>
        <nav style={{zIndex:50}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LoginAndSignup">Login/Signup</Link>
          </li>
        </ul>
      </nav>
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
