import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Setting from "./Components/Settings";
import Writing from "./Components/Writing";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Combination from "./Components/Combination";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/settings" component={Setting}></Route>
      <Route exact path="/writing" component={Writing}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/combination" component={Combination}></Route>
    </Router>
  );
}

export default App;
