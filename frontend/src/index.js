import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import Tutor from "./components/Tutor";
import 'react-datepicker/dist/react-datepicker.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import App from "./App";
import Class from "./components/Class";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Student from "./components/Student";
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
        <Route path="/student" component={Student} />
        {/* <Route path="/tutor" component={Tutor} /> */}
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
