// IMPORTS
// -------------------------------------
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { localStorageKey } from "./";
// Assets
import "./App.css";

// COMPONENT
// -------------------------------------
const Dashboard = (props) => {
  // State / Props
  const [user, setUser] = useState(null);

  // Functions
  const onClick = (event) => {
    localStorage.removeItem(localStorageKey);
    props.history.push("/");
    event.preventDefault();
  };

  // Hooks
  useEffect(() => {
    setUser(localStorage.getItem(localStorageKey));
    return () => {
      setUser(null);
    };
  }, []);

  // Render
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1>Dashboard</h1>
            <hr />
            <p>Welcome</p>
            <pre>
              <code>{JSON.stringify(JSON.parse(user), null, " ")}</code>
            </pre>
            <hr />
            <button onClick={onClick} className="btn btn-danger">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// EXPORTS
// -------------------------------------
export default withRouter(Dashboard);
