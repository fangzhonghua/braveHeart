import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home.jsx";
import Start from "./component/start.jsx";
import Upload from "./component/upload.jsx";
import NoMatch from "./component/noMatch.jsx";

const Routes = () => {
  return <HashRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
      <Route path="*" >
        <NoMatch/>
      </Route>
    </Switch>
  </HashRouter>;
};

export default Routes;