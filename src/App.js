import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/login";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup/signup";
import Home from './components/Home/home'
function App() {
  return (
    <Router>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
  
  </Router>
  );
}

export default App;
