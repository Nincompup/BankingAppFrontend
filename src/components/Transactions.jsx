import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import moment from 'moment';
import { TransactionDetails } from '../action';

const Transactions = () => {
    const [trans,setTrans] = useState([]);

    
    
  
  
    useEffect(() => {
      const func=async()=>{
        const data=await TransactionDetails();
        setTrans(data);
      }
      return func;
    });



  return (
<div className='content'>
    <Navbar />
      <div className="container-fluid">
        <div>
          <h1 className="heading">Transactions</h1>
          <hr />  
        </div>
        <div className="scroll">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Sender A/c</th>
                <th scope="col">Reciever A/c</th>
                <th scope="col">Amount</th>
                <th scope="col">Done AT</th>
                
              </tr>
            </thead>
            <tbody>
              {trans?.sort((a,b) => a.doneat>b.doneat? -1:1).map((user) => (
                <tr key={user._id}>
                  <td>{user.senderacc}</td>
                  <td>{user.recieveracc}</td>
                  <td>Rs.{user.amount}</td>
                  <td>{moment(user.doneat).fromNow()}</td>
            
                


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-fluid b4footer"></div>
    </div>
  )
}

export default Transactions