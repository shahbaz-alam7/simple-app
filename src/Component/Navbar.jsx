import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
