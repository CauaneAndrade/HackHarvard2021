import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Class from "./components/Class";
import SignUp from "./components/SignUp";
import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/classes" component={Class} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
