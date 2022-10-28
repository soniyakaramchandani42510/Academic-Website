import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
