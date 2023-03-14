import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import "./css/allcustomers.css";
import styled from 'styled-components'
import Form from './Form';


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
  const [open,setOpen]=useState(false)
  return (
    
  <Card0  pic={user} props={props} style={{background: `url(${user.pic}) center center no-repeat`,  backgroundSize: '300px'}} >
    <div class="border1">
      <h2 class="h2per">{user.name}</h2>
      <div class="fa iconss" onClick={()=>{setOpen(!open)}}>
         <div>{user.accno}</div>
      </div>
    </div>
    {open&&<Form user={user} />}
  </Card0>

  
  

   

  )
}

export default Card