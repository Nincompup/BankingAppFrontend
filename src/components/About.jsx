import React from "react";
import "./css/allcustomers.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="container-fluid">
        <div>
          <h1 className="heading">About Us</h1>
          <hr />
        </div>
        <div className="container aboutbox">
          <h1 className="who">Who we are</h1>
          <p>
            <span className="wspan"> "W</span>elcome to our bank! We are a team
            of financial experts with a commitment to providing exceptional
            service and support to our customers. At our bank, we understand
            that managing your finances can be complex and overwhelming. That's
            why we offer a wide range of financial products and services, from
            checking and savings accounts to loans and investments. Our team of
            experienced bankers is dedicated to helping you navigate the
            financial landscape and make the best decisions for you and your
            family. In addition to our financial expertise, we pride ourselves
            on our commitment to the communities we serve. We believe in giving
            back and supporting local organizations and initiatives that make a
            difference. Thank you for choosing our bank. We look forward to
            serving all your financial needs."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
