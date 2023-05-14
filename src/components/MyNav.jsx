import React from "react";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand fs-5" to='/'>
          InTech Solusions
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
