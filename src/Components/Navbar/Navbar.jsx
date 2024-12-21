// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import Logo from '../Image/navLogo.jpg';

const Navbar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <>
    <nav className="Navbar">
        <div className="navTop">
            <div className="navLogo">
            <img src={Logo} alt="LogoImage" />
            <h1>Scents By S&N</h1>
            </div>           
            <div className="navIcons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>

            </div>
        </div>
        <div className="navBottom">
            <div className="navItems">
                <ul>
                    <li onClick={()=>{setMenu("home")}}><Link to="/" >home</Link>{menu==="home"?<hr />:<></>}</li>
                    <li onClick={()=>{setMenu("shop")}}><Link to="/Shop" >shop </Link>{menu==="shop"?<hr />:<></>}</li>
                    <li onClick={()=>{setMenu("menperfumes")}}><Link to="/MenPerfume" >men perfumes </Link>{menu==="menperfumes"?<hr />:<></>}</li>
                    <li onClick={()=>{setMenu("womenperfumes")}}><Link to="/WomenPerfume" >women perfumes </Link>{menu==="womenperfumes"?<hr />:<></>}</li>
                    <li onClick={()=>{setMenu("testerbox")}}><Link to="/TesterBox" >tester box </Link>{menu==="testerbox"?<hr />:<></>}</li>
                    <li onClick={()=>{setMenu("contactus")}}><Link to="/ContactUs" >contact us </Link>{menu==="contactus"?<hr />:<></>}</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
