import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../SearchBar/SearchBar";

export const NavBar_Admin = () => {
  return (
    <nav>
      <Link to="/admin/properties">Home</Link>
      <Link to="/admin/add_property">Add Property</Link>
      <SearchBar />
    </nav>
  );
};
