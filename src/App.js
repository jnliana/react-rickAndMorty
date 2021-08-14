import React from "react";
import Globalstyle from "./global-styles";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./nprogress.css";

import Character from "./character/pages/Character";
import { Route } from "react-router";
import noFound from "./character/pages/404";

function App() {
  return (
    <React.Fragment>
      <Globalstyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Character}></Route>
          <Route path="/:id" exact component={Character}></Route>
          <Route path="/noFound/404" exact component={noFound}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
