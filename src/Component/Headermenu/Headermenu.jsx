import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import Aboutus from "./../Aboutus/Aboutus";
import Ourprojects from "./../Ourprojects/Ourprojects";
import Upcomingventures from "./../Upcomingventures/Upcomingventures";
import Ourclients from "./../Ourclients/Ourclients";
import Contactus from "./../Contactus/Contactus";
import Home from "./../Home/Home";
import "./Headermenu.css";
const Headermenu = ()=>{
    return(
      <>
        <div className="headermenu-container">
        <div className="logo">
          <img src="./images/logo.svg" />
        </div>
        <div className="header-menu">
        <ul className="mb-0">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Aboutus">Aboutus</Link></li>
          <li><Link to="/Ourprojects">Ourprojects</Link></li>
          <li><Link to="/Ourclients">Ourclients</Link></li>
          <li><Link to="/Upcomingventures">Upcomingventures</Link></li>
          <li><Link to="/Contactus">Contactus</Link></li>
        </ul>
        </div>    
        </div>
        <div>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  exact  path="/Aboutus" element={<Aboutus />} />
          <Route  exact  path="/Ourprojects" element={<Ourprojects />} />
          <Route  exact  path="/Ourclients" element={<Ourclients />} />
          <Route  exact  path="/Upcomingventures" element={<Upcomingventures />} />
          <Route  exact  path="/Contactus" element={<Contactus />} />
      </Routes>
      </div>
     
   
      </>
    )
}
export default Headermenu;