import React, { useState } from "react";
import axios from "axios";
import "./css/allcustomers.css";
import Navbar from "./Navbar";

const TranferMoney = () => {
  const [data, setData] = useState({
    recieveracc: "",
    senderacc: "",
    amount: "",
  });
  const API = axios.create({baseURL:"https://banking-app-backend-9ac4tbj37-nincompup.vercel.app/api"});

  const createTransaction = async (senderacc, trandata) => {
    try {
      const newtrans = await API.post(
        `/details/transactions/${senderacc
        }`,
        trandata
      );
      console.log(newtrans);
    } catch (error) {
      console.log(error);
    }
  };

  const TransfferMoney = async (data) => {
    try {
      const msg = await API.patch(
        `/details/${data.senderacc}/${data.recieveracc}`,
        data
      );
      alert(msg.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div>
          <h1 className="heading">Tranfer Money</h1>
          <hr />
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
