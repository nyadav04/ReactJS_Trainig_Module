import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        My App
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" class="navbar-brand">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="navbar-brand">
              About us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="navbar-brand">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
