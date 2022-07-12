import "./App.css";
import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";
import { Property_Details } from "./Pages/Property_Details/Property_Details";
import { Property_Add_Admin } from "./Pages/Admin/Property_Add_Admin/Property_Add_Admin";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Redirect to="/properties" />
        </Route>
        <Route exact path="/properties">
          <NavBar />
          <Home />
        </Route>
        <Route exact path="/properties/:id">
          <NavBar />
          <Property_Details />
        </Route>
        <Route exact path="/add_property">
          <NavBar />
          <Property_Add_Admin />
        </Route>
      </Router>
    </>
  );
}

export default App;
