import React from "react";
import "./grid.css";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="site-nav">
      <ul className="mainnav">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
