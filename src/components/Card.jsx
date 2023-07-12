import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import "./css/allcustomers.css";
import styled from 'styled-components'
import Form from './Form';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactDOM from 'react-dom';
import { createTransaction, omkidetails, TransfferMoney } from "../action";
import { createtransaction } from "../api";



const Card0=styled.div`


&:hover {
    
    background: url(${(props)=>(props.pic.pic)}) ${(props)=>(props.pic.design)}   repeat !important ;
    background-size: 400px !important ;

    
}



&:hover h2 {
    opacity: 1;
  }
&:hover .fa {
    opacity: 1;
  }
  height: 379px;
  width: 300px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  margin: 30px;
  justify-content: center;
  align-items: center; 
  position: relative;
  
  
`


const Card = ({user,props}) => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const [data, setData] = useState({ amount: "", accno: "" });
  const [trandata, setTransdata] = useState({
    recieveracc: "",
    senderacc: "",
    amount: "",
  });

//   const closeIcon = (
// <svg>
//     <line x1="1" y1="11" 
//           x2="11" y2="1" 
//           stroke="black" 
//           stroke-width="2"/>
//     <line x1="1" y1="1" 
//           x2="11" y2="11" 
//           stroke="black" 
//           stroke-width="2"/>
// </svg>
//   );

const HandleSubmit = (acc) => {
const message = TransfferMoney(acc, data);
  console.log(trandata);
  createtransaction(acc, trandata);
  console.log(acc);
  setData({ amount: "", accno: "" });
  setTransdata({ recieveracc: "", senderacc: "", amount: "" });
};


  return (
    <>
  <Card0 onClick={() => setOpen(true)} pic={user} props={props} style={{background: `url(${user.pic}) center center no-repeat`,  backgroundSize: '300px'}} >
       
      {/* <div className='modal--div'>
        <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi libero facere ex laborum eaque hic porro, quis voluptatum aliquid expedita.
        </h1>
      </div> */}

    <div class="border1">
      <h2 class="h2per">{user.name}</h2>
      <div class="fa iconss">
         <div>{user.accno}</div>
      </div>
    </div>
    {/* {open&&<Form user={user} />} */}
  </Card0>
     {open && 
    <Modal
    classNames='modala'
        isVisible
        open={open}
        animationIn="fadeIn" animationOut="fadeOut"
        onClose={() => setOpen(!open)}
    
        center
        >
       <div className="container"    >
        <div className="row">
          <div className="cont1 col-lg-4 col-md-12">
            <img className='cardimg' src={user.pic} alt=""  style={{width:'10rem',borderRadius:'10px',marginLeft:'4rem',marginRight:'4rem'}} />
          </div>
          <div className="cont2 col-lg-8 col-md-12" style={{textAlign:'left'}}>
            <h1 >{user.name}</h1>
            <h4 >{user.accno}</h4>
            <h4 >{user.email}</h4>
            <h4 >&#x20b9; {user.balance}</h4>
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
          </div>
      
        </div>
       </div>
      </Modal> 
}
  
        </>

   

  )
}

export default Card