import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup/signup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
