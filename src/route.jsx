import React from "react";
import {Route, Switch } from "react-router";
import { BrowserRouter, Link} from "react-router-dom";
import Home from "./component/home.jsx";
import Start from "./component/start.jsx";
import UploadPage from "./component/upload.jsx";
import NoMatch from "./component/noMatch.jsx";

const Routes = () => {
  return <BrowserRouter basename="/admin" forceRefresh={true}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/upload">
        <Link to="/upload">uploadlink</Link>
        <UploadPage />
      </Route>
      <Route path="*" >
        <NoMatch/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default Routes;