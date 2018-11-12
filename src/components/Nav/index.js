import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <React.Fragment className="Nav">
    <Link to="/">Home</Link>
    <Link to="/vendorsignup">Vendor Sign Up</Link>
  </React.Fragment>
);

export default hot(module)(Nav);
