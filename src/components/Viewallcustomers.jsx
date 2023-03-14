import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/allcustomers.css";

import Navbar from "./Navbar";
import { createTransaction, omkidetails, TransfferMoney } from "../action";
import { createtransaction } from "../api";
import Card from "./Card";

const arr={1:'center top',2:'center center',3:'left center',4:'right center',5:'left top',6:'right top'}


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
let i=0;
  return (
    <div className="content">
      <Navbar />

      <div className="container-fluid">
        <div className="headerclass">
          <h1 className="heading">All Customers</h1>
        </div>
      
       



       <div class="container cont1">
      
         <div className="row">
       {
         
         users.map((user) =>(
         <Card key={user._id} user={user} props={arr[i===6?i=0:i=i+1]} />
       
       )
       
       )}
       </div>
  </div>

      <div className="container-fluid b4footer"></div>
      </div>
      </div>








   



  );
};

export default Viewallcustomers;
