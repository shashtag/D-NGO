import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/SignInpage/SignInpage";
import Pay from "./Pages/Pay/Pay";

function App() {
  return (
    <ThemeProvider theme={theme}>

      
      <Router>
        <div className='App'>aaa</div>
        <nav style={{zIndex:50}}>
        <ul style={{display:'flex', justifyContent:'space-around', position: 'relative', top:'-10px'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LoginAndSignup">Login/Signup</Link>
          </li>
          <li>
            <Link to="/Pay">Pay</Link>
          </li>
        </ul>
      </nav>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/LoginAndSignup' component={SignInPage} />
          <Route path='/Pay' component={Pay} />
          {/* <Route path='/dashboard'><Dashboard /></Route> */}
        </Switch>
      </Router>


    </ThemeProvider>
  );
}

export default App;
