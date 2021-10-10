import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Class from "./components/Class";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Menu from "./components/VideoChat/Menu";
import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
          <Route path="/chat" component={Menu} />
        <Route path="/signup" component={SignUp} />
        <Route path="/classes" component={Class} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
