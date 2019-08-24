import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./templates/App.css";
import Login from "./components/login";
import Home from "./components/home";
import Error from "./components/error";
import Navbr from "./components/navbar";
import Projects from "./components/projects";
import TM from "./components/trademark";
import attachments from "./components/attachments";

class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbr />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/projects" component={Projects} />
            <Route path="/attachments" component={attachments} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <TM />
      </div>
    );
  }
}

export default App;
