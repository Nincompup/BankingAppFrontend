import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import "./css/allcustomers.css";
import styled from 'styled-components'
import Form from './Form';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactDOM from 'react-dom';



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
  const [open, setOpen] = React.useState(false);

  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    
  <Card0 onClick={() => setOpen(true)} pic={user} props={props} style={{background: `url(${user.pic}) center center no-repeat`,  backgroundSize: '300px'}} >
         <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
          
        </p>
      </Modal>

    <div class="border1">
      <h2 class="h2per">{user.name}</h2>
      <div class="fa iconss">
         <div>{user.accno}</div>
      </div>
    </div>
    {/* {open&&<Form user={user} />} */}
  </Card0>

  
  

   

  )
}

export default Card