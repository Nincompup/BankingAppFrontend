import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./css/allcustomers.css";

import Navbar from "./Navbar";

const Viewallcustomers = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [accno, setAccno] = useState();
  const [amount, setAmount] = useState();
  const [data, setData] = useState({ amount: "", accno: "" });
  const [trandata, setTransdata] = useState({
    recieveracc: "",
    senderacc: "",
    amount: "",
  });

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

  const createTransaction = async (senderacc, trandata) => {
    try {
      const newtrans = await API.post(
        `/details/transactions/${senderacc}`,
        trandata
      );
      console.log(newtrans);
    } catch (error) {
      console.log(error);
    }
  };
  const TransferMoney = async (id, data) => {
    try {
      const msg = await API.patch(`/details/${id}/${data.accno}`, data);
      alert(msg.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = (acc) => {
    TransferMoney(acc, data);
    console.log(trandata);
    createTransaction(acc, trandata);
    console.log(acc);
    setData({ amount: "", accno: "" });
    setTransdata({ recieveracc: "", senderacc: "", amount: "" });
  };

  return (
    <div className="content">
      <Navbar />
      {/* <!-- main content  --> */}

      <div className="container-fluid">
        <div>
          <h1 className="heading">All Customers</h1>
          <hr />
        </div>
        <div className="scroll">
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
        </div>
      </div>

      <div className="container-fluid b4footer"></div>
    </div>
  );
};

export default Viewallcustomers;
