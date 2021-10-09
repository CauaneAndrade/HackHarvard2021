import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import App from "./App";
import './index.css';


ReactDOM.render(
  <>
  <BrowserRouter>
      <Switch>
      <Route path="/" exact={true} component={App} />
      </Switch>
  </ BrowserRouter>
  </>
  , document.getElementById("root")
);