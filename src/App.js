import React, { useEffect } from "react";
import Home from "./screen/Home";
import LogIn from "./screen/LogIn";
import Profile from './screen/Profile'
import "./styles/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/user/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(
      (userAuth) => {
        if (userAuth) {
          // Logged in
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          //Logged out
          dispatch(logout())
        }
      });
    return unsuscribe //equivale a la funcion de limpieza
  }, [dispatch]); 
  return (
    <div className="app">
      <Router>
        {/* comprobacion de usuario */}
        { !user ?
          (<LogIn />)
          :
          (
            <Switch>
              <Route path="/profile" >
                <Profile />
              </Route>
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
