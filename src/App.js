import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from './Welcome'
import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <br />
    </>
  );
}

export default App;
