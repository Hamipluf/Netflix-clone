import React from "react";
import Home from "./component/Home";
import LogIn from "./component/LogIn";
import "./styles/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LogIn />
        ) : (
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> 
        )}
     
      </Router>
    </div>
  );
}

export default App;
