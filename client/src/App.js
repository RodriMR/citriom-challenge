import "./App.css";
import "./sass/main.scss";
import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home_Admin } from "./Pages/Admin/Home_Admin/Home_Admin";
import { Property_Details } from "./Pages/Property_Details/Property_Details";
import { Property_Add_Admin } from "./Pages/Admin/Property_Add_Admin/Property_Add_Admin";
import { Property_Edit_Admin } from "./Pages/Admin/Property_Edit_Admin/Property_Edit_Admin";
import { NavBar_Admin } from "./components/Admin/NavBar_Admin/NavBar_Admin";
import { Home } from "./Pages/Home/Home";
import { Login_Admin } from "./Pages/Admin/Login_Admin/Login_Admin";

function App() {
  return (
    <>
      {/* ADMIN ROUTES */}
      <Router>
        <Route exact path="/">
          {/* REDIRECT */}
          <Redirect to="/properties" />
        </Route>
        <Route exact path="/admin">
          <Redirect to="/admin/login" />
        </Route>
        <Route exact path="/admin/login">
          <Login_Admin />
        </Route>

        <Route exact path="/admin/properties">
          <NavBar_Admin />
          <Home_Admin />
        </Route>
        <Route exact path="/admin/add_property">
          <NavBar_Admin />
          <Property_Add_Admin />
        </Route>
        <Route exact path="/admin/edit/:id">
          <NavBar_Admin />
          <Property_Edit_Admin />
        </Route>
        <Route exact path="/admin/properties/:id">
          <NavBar_Admin />
          <Property_Details />
        </Route>
      </Router>
      {/* USER ROUTES */}
      <Router exact>
        <Route exact path="/properties">
          {/* <NavBar /> */}
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
