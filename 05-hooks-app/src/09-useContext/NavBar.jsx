import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={(args) => {
                return "nav-link " + (args.isActive ? "active" : "");
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="login"
              className={(args) => {
                return "nav-link " + (args.isActive ? "active" : "");
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/about"
              className={(args) => {
                return "nav-link " + (args.isActive ? "active" : "");
              }}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
