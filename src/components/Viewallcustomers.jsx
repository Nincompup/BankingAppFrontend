import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/allcustomers.css";

import Navbar from "./Navbar";
import { createTransaction, omkidetails, TransfferMoney } from "../action";
import { createtransaction } from "../api";

const Viewallcustomers = () => {
  const [users, setUsers] = useState([]);

  const [data, setData] = useState({ amount: "", accno: "" });
  const [trandata, setTransdata] = useState({
    recieveracc: "",
    senderacc: "",
    amount: "",
  });

  useEffect(() => {
    const func = async () => {
      const data = await omkidetails();
      setUsers(data);
    };
    return func;
  });

  const HandleSubmit = (acc) => {
    TransfferMoney(acc, data);
    console.log(trandata);
    createtransaction(acc, trandata);
    console.log(acc);
    setData({ amount: "", accno: "" });
    setTransdata({ recieveracc: "", senderacc: "", amount: "" });
  };

  return (
    <div className="content">
      <Navbar />

      <div className="container-fluid">
        <div className="headerclass">
          <h1 className="heading">All Customers</h1>
        </div>
        {/* <div className="table-cont overflow-auto">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Account No.</th>
                <th scope="col">Balance</th>
                <th scope="col">Send Money</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.accno}</td>
                  <td>Rs.{user.balance}</td>
                  <td key={user._id}>
                    <div class="dropdown">
                      <button
                        class="btn  btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-paper-plane"></i>
                      </button>

                      <ul
                        class="dropdown-menu"
                        style={{
                          height: "200px",
                          width: "200px",
                          padding: "20px",
                        }}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <div>Reciever A/c</div>
                          <input
                            type="text"
                            value={data.accno}
                            onChange={(e) => {
                              setData({ ...data, accno: e.target.value });
                              setTransdata({
                                ...trandata,
                                recieveracc: e.target.value,
                                senderacc: user.accno,
                              });
                            }}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </li>
                        <li>
                          <div>Amount</div>
                          <input
                            type="text"
                            value={data.amount}
                            onChange={(e) => {
                              setData({ ...data, amount: e.target.value });
                              setTransdata({
                                ...trandata,
                                amount: e.target.value,
                              });
                            }}
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </li>
                        <li style={{ marginLeft: "55px", marginTop: "10px" }}>
                          <button
                            type="button"
                            id="mani"
                            onClick={() => HandleSubmit(user.accno)}
                            className="btn btn-primary"
                          >
                            <i class="fa-solid fa-paper-plane"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="container">
        <div class="container cardcont">
  <div class="cardcc card0">
    <div class="bordercc">
      <h2>Al Pacino</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="cardcc card1cc">
    <div class="bordercc">
      <h2>Ben Stiller</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="cardcc card2cc">
    <div class="border">
      <h2>Patrick Stewart</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className="container-fluid b4footer"></div>
    </div>
  );
};

export default Viewallcustomers;
