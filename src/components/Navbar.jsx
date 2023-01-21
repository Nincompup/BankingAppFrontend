import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong stroke">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            <i className="fa-solid fa-sack-dollar "></i> CBI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item rem-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item rem-item">
                <Link
                  to="/transfermoney"
                  className="nav-link"
                  aria-current="page"
                >
                  Transfer Money
                </Link>
              </li>
              <li className="nav-item rem-item">
                <Link
                  to="/viewallcustomers"
                  className="nav-link"
                  aria-current="page"
                >
                  View All Customers
                </Link>
              </li>
              <li className="nav-item rem-item">
                <Link
                  to="/transactions"
                  className="nav-link"
                  aria-current="page"
                >
                  Transactions
                </Link>
              </li>

              <li className="nav-item last-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
