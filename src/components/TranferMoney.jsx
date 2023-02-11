import React, { useState } from "react";
import axios from "axios";
import "./css/allcustomers.css";
import Navbar from "./Navbar";
import { createTransaction, TransfferMoney } from "../action";

const TranferMoney = () => {
  const [data, setData] = useState({
    recieveracc: "",
    senderacc: "",
    amount: "",
  });
  

  const HandleSubmit = async () => {
    TransfferMoney(data);
    createTransaction(data.senderacc, data);
    setData({ recieveracc: "", senderacc: "", amount: "" });
  };

  return (
    <div className="content">
      <Navbar />

      {/* <!-- main content  --> */}

      <div className="container-fluid">
        <div className="headerclass">
          <h1 className="heading">Tranfer Money</h1>
        </div>
        <div class="login-box">
          <h3 className="havea">
            {" "}
            Have a safe transaction <i class="fa-solid fa-thumbs-up"></i>{" "}
          </h3>
          <form>
            <div class="user-box">
              <input
                onChange={(e) => {
                  setData({ ...data, senderacc: e.target.value });
                }}

                type="text"
                name=""
                required=""
              />
              <label>Sender A/c</label>
            </div>
            <div class="user-box">
              <input
                onChange={(e) => {
                  setData({ ...data, recieveracc: e.target.value });
                }}
                type="text"
                name=""
                required=""
              />
              <label>Reciever A/c</label>
            </div>
            <div class="user-box">
              <input
                onChange={(e) => {
                  setData({ ...data, amount: e.target.value });
                }}
                type="text"
                name=""
                required=""
              />
              <label>Amount</label>
            </div>
            <div class="a">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button
                onClick={() => {
                  HandleSubmit();
                }}
                class="btn btn-primary bg-transparent"
              >
                Send Money
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid b4footer"></div>
    </div>
  );
};

export default TranferMoney;
