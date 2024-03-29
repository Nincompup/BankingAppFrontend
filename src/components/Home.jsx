import React from 'react'
// import {Link} from 'react-router-dom';
// import styles from './css/style.css';
import './css/style.css';
import AOS from 'aos';
import SplitType from 'split-type'

import bank6 from './images/bank6.jpg';
import bank7 from './images/bank7.png';
import bank1me from './images/bank1me.png';





import { useState,useEffect } from 'react';
import {omkidetails} from '../action/index'
import Navbar from './Navbar';
import { gsap } from "gsap";

const Home = () => {
    const [users,setUsers]=useState([]);

    
       
 
    useEffect(() => {
       const data=omkidetails(); 
   setUsers(data);
    },[])
    useEffect(() => {
        AOS.init();
      }, []);

    // console.log(users)

    const myText = new SplitType('#my-text')
    setTimeout(function() {
        document.getElementsByClassName('para2').style.display = 'none';
      }, 5000)
      

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    


    
    
    

  return (
   <>
          <div className="content">  
    

   <div>
            <div className="bg--overlay"></div>
         

       
          <Navbar/>
          {/* < />!-- main header starts --> */}

          <div className=" container-fluid main-header">
              <div className="row">
                  <div className="">
                      <div className="row">
                          {/* <div className="col-md-2 col-12 mhr">
                          </div> */}
                          {/* <div className="col-md-2 col-12"></div> */}
                          <div className=" mhl col-md-12 col-12 ">
                              <p className="para2">Welcome to <span> Central Bank Of India </span></p>
                              <header>
                              <h3 className="headin" id="my-text">A Giant Leap Towards  Ultimate Banking </h3>
                              </header>
                     
                          </div>
                      </div>
                  </div>
              </div>
          </div>

</div>
</div>
<div className="section-2">
          {/* < />!-- features content starts  --> */}
          <div className="after-content">

              <div className="head">
                 <h1>Features</h1>
                  <hr/>
                  </div>
          <div className="container-fluid features">

            

          <div className="row" >
              <div className="col-lg-4 "     data-aos="fade-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
 >
   
                  <div className="card "  >
                      <div className="card-body "  >
                          <h5 className="card-title"><i className="fa-solid fa-piggy-bank"></i></h5>
                          <a className="gosome" href="/transactions"  aria-current="page">Transaction History</a>
                          <p className="card-text">Here, you can keep track of transactions done.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 "     data-aos="zoom-in"
    data-aos-offset="-200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
>
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title"><i className="fa-solid fa-users"></i></h5>
                          <a className="gosome"  href="/viewallcustomers"  aria-current="page">View All Customers</a>
                        
                          <p className="card-text">Here, you can get information of customer of the bank.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 "    data-aos="fade-left"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
>
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title"><i className="fa-solid fa-comments-dollar"></i></h5>
                          
                          <a className="gosome" href="/transfermoney" aria-current="page">Transfer Money</a>
                          <p className="card-text">Here, you can transfer money from your account </p>
                      </div>
                  </div>
              </div>


          </div>
          </div>
    

   {/* footer starts  */}
   <footer class="white-section" id="footer" >
    <div class="container-fluid">
      
      <a href="https://twitter.com/_Om_Lokhande_"><i class="fa-brands fa-twitter footer-img"></i></a>
      <a href="/"><i class="fa-brands fa-facebook footer-img"></i></a>
      <a href="https://www.instagram.com/_lokhandeom07_/"><i class="fa-brands fa-instagram footer-img"></i></a>
      <a href="/"><i class="fa-regular fa-envelope footer-img"></i></a>
      <p class="footer-text">© Copyright CBI</p>
  {/* <p id="footer">Created By Om Lokhande</p> */}
    </div>
  </footer>

  
  </div>
  </div>
        </>  
    )
}

export default Home

