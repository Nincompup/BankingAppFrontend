import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";
import axios from "axios";
import bank6 from "./images/bank6.jpg";
import bank7 from "./images/bank7.png";
import bank1me from "./images/bank1me.png";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);

  const API = axios.create({ baseURL: "http://localhost:8082/api" });

  const fetchdetails = () => API.get("/details");

  const omkidetails = async () => {
    try {
      const { data } = await fetchdetails();
      setUsers(data);
    } catch (rishav) {
      console.log(rishav);
    }
  };

  useEffect(() => {
    omkidetails();
  }, []);

  console.log(users);

  return (
    <>
      <div className="content">
        <div className="bg--overlay"></div>

        <Navbar />
        {/* < />!-- main header starts --> */}

        <div className=" container-fluid main-header">
          <div className="row">
            <div className="">
              <div className="row">
                <div className=" mhl col-md-5 col-12 ">
                  <p className="para2">
                    Welcome to <span> Central Bank Of India </span>
                  </p>
                  <h3 className="headin">
                    A Giant Leap Towards Ultimate Banking{" "}
                  </h3>
                </div>
                <div className="col-md-2 col-12"></div>
                <div className="col-md-5 col-12 mhr">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                          <img
                            src={bank1me}
                            className="main--img w-75"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                          <img
                            src={bank6}
                            className="main--img w-75"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                          <img
                            src={bank7}
                            className="main--img w-75"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev "
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon "
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden ">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* < />!-- features content starts  --> */}

        <div className="container-fluid features">
          <div className="head">
            <hr />
          </div>

          <div className="row">
            <div className="col-lg-4 ">
              <div className="card ">
                <div className="card-body ">
                  <h5 className="card-title">
                    <i className="fa-solid fa-piggy-bank"></i>
                  </h5>
                  <a className="gosome">
                    <Link
                      to="/transactions"
                      className="nav-link text-black"
                      aria-current="page"
                    >
                      Transaction History
                    </Link>
                  </a>

                  <p className="card-text">
                    Here, you can keep track of transactions done.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-users"></i>
                  </h5>
                  <a className="gosome">
                    <Link
                      to="/viewallcustomers"
                      className="nav-link text-black"
                      aria-current="page"
                    >
                      View All Customers
                    </Link>
                  </a>

                  <p className="card-text">
                    Here, you can get information of customer of the bank.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-comments-dollar"></i>
                  </h5>

                  <a className="gosome">
                    <Link
                      to="/transfermoney"
                      className="nav-link text-black"
                      aria-current="page"
                    >
                      Transfer Money
                    </Link>
                  </a>
                  <p className="card-text">
                    Here, you can transfer money from your account{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer starts  */}

        <p id="footer">Created By Om Lokhande</p>
      </div>
    </>
  );
};

export default Home;
