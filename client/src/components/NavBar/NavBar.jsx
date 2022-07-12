import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/properties">Home</Link>
      <Link to="/add_property">Add Property</Link>
    </nav>
  );
};
