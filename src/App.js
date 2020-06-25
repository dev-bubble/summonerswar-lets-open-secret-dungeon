import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Setting from "./Components/Settings";
import Writing from "./Components/Writing";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/settings" component={Setting}></Route>
      <Route exact path="/writing" component={Writing}></Route>
    </Router>
  );
}

export default App;
