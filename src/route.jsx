import React from "react";
import {Route, Switch } from "react-router";
import { BrowserRouter, Link} from "react-router-dom";
import Home from "./component/home.jsx";
import Start from "./component/start.jsx";
import Upload from "./component/upload.jsx";
import NoMatch from "./component/noMatch.jsx";

const Routes = () => {
  return <BrowserRouter basename="/admin" forceRefresh={false}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/upload">
        <Link to="/upload">uploadlink</Link>
        <Upload />
      </Route>
      <Route path="*" >
        <NoMatch/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default Routes;