import React from "react";
import "./styles/App.scss";

//components
import Home from "./pages/Home";
import Nav from "./pages/home/Nav";
import { Switch, Route } from "react-router-dom";
import Places from "./pages/Places";
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
      </Switch>
    </div>
  );
}

export default App;
