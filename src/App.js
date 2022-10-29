import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
