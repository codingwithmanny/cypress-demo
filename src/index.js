// IMPORTS
// -------------------------------------
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Components
import Login from "./Login";
import Dashboard from "./Dashboard";
// Assets
import "./index.css";

// CONFIGS
// -------------------------------------
export const localStorageKey = "user";

// RENDER
// -------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem(localStorageKey) !== null ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={() =>
            localStorage.getItem(localStorageKey) !== null ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          render={() =>
            localStorage.getItem(localStorageKey) !== null ? (
              <Dashboard />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your Login to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
