import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar"


function App() {
    return (
      <>
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    )
}

export default App;