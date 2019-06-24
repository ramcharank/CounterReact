import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  console.log("what about Navbar");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Items <br />
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
