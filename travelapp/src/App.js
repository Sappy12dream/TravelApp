import React from "react";
import "./styles/App.scss";

//components
import Home from "./pages/Home";
import Nav from "./pages/home/Nav";
import { Switch, Route } from "react-router-dom";
import Places from "./pages/Places";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/places">
          <Places/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
