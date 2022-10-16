import React, { useEffect } from "react";
import Home from "./screen/Home";
import LogIn from "./screen/LogIn";
import "./styles/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect (() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
      } else {
        //Logged out
      }
    })
  },[]);
  return (
    <div className="app">
      <Router>
        {/* comprobacion de usuario */}
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
