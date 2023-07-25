import { Form, Link, redirect, useNavigate, useRouteLoaderData } from "react-router-dom";
import "./css/style.css";
import React, { useContext } from "react";
import { AuthContext } from "../context/authcontext";

const Navbar = () => {

  const {currentUser,logout}=useContext(AuthContext);
  const navigate=useNavigate();

  return (
       <nav style={{position: "sticky"}}  className="navbar navbar-expand-lg navbar-light shadow-5-strong stroke">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            <Link to="/" className="nav-link" aria-current="page">
                
            <i className="fa-solid fa-sack-dollar "></i> CBI
                </Link>
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
             {currentUser!==null && <li className="nav-item rem-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>}
              {currentUser!==null &&  <li className="nav-item rem-item">
                <Link
                  to="/transfermoney"
                  className="nav-link"
                  aria-current="page"
                >
                  Transfer Money
                </Link>
              </li>}
              {currentUser!==null && 
              <li className="nav-item rem-item">
                <Link
                  to="/viewallcustomers"
                  className="nav-link"
                  aria-current="page"
                >
                  View All Customers
                </Link>
              </li>}
              {currentUser!==null && 
              <li className="nav-item rem-item">
                <Link
                  to="/transactions"
                  className="nav-link"
                  aria-current="page"
                >
                  Transactions
                </Link>
              </li>}
              {currentUser!==null && 

              <li className="nav-item ">
                <Link to="/about" className="nav-link" aria-current="page">
                  About Us
                </Link>
              </li>}
              {currentUser===null &&<li className="nav-item ">
                <Link to="/login" className="nav-link" aria-current="page">
                 Login
                </Link>
              </li>}
              {currentUser!==null &&
              <li className="nav-item last-item">
                <Form action="/logout" method="post">
                  <button onClick={()=>{
                  navigate('/login')}}>Logout</button>
                </Form>
              </li>
}
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
