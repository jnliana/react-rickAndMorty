import React from "react";
import Globalstyle from "./global-styles";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./nprogress.css";

import Character from "./character/pages/Character";
import { Route } from "react-router";

function App() {
  return (
    <React.Fragment>
      <Globalstyle />
      <Router>
        <Switch>
          <Route path="/:id" exact component={Character}></Route>
          <Route path="/" exact component={Character}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
