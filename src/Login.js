// EXPORTS
// -------------------------------------
import React, { useState } from "react";
import { localStorageKey } from "./";
import { withRouter } from "react-router-dom";
// Assets
import "./App.css";
import UserData from "./data.json";

// COMPONENT
// -------------------------------------
const Login = (props) => {
  // State / Props
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // Functions
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      UserData.username !== state.email ||
      UserData.password !== state.password
    ) {
      setError("Incorrect credentials.");
    } else {
      localStorage.setItem(localStorageKey, JSON.stringify(UserData));
      props.history.push("/");
    }
    setSubmitted(false);
  };

  const onChange = (event) => {
    const newState = { ...state };
    newState[event.target.name] = event.target.value;
    setState(newState);
  };

  // Render
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4">
            <h1>Login</h1>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  disabled={submitted}
                  onChange={onChange}
                  className="form-control"
                  type="email"
                  required="required"
                  name="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  disabled={submitted}
                  onChange={onChange}
                  className="form-control"
                  type="password"
                  required="required"
                  name="password"
                  placeholder="********"
                />
              </div>
              {error && (
                <div className="form-group">
                  <div className="alert alert-danger">{error}</div>
                </div>
              )}
              <div className="form-group">
                <button
                  disabled={submitted}
                  className="btn btn-primary btn-block"
                >
                  {submitted ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// EXPORTS
// -------------------------------------
export default withRouter(Login);
