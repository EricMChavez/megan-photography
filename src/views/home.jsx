import React from 'react';
import {
  NavLink
} from "react-router-dom";
import '../styles/home.css'
const Home = () => {
  return ( 
    <React.Fragment>
    
    <div className="bgImg"/>
    <NavLink to="/book" className="cta btn">BOOK A SESSION</NavLink>
    <div className="container">
      <div className="textCard">
        <div className="cardTitle">Buenos Dias,</div>
        Lorem ipsum ied ratione reprehenderit doloremque ipsa sequi, sapiente provident nisi deleniti, quos qui veniam quaerat sunt at enim est quibusdam minima aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui debitis fugit blanditiis accusamus reiciendis consequatur laboriosam sed quibusdam minus placeat, reprehenderit nostrum, doloremque totam rem sit aut iure vero!
        <div id="face"/>
      </div>
      
    </div>
    <div className="container">
      <div className="values">
        <div className="value value-1">TIMELESS</div>
        <div className="value value-2">1,000 WORD VALUE</div>
        <div className="value value-3">PRETTY COLORS</div>
        <div className="value photo-1"/>
        <div className="value photo-2"/>
        <div className="value photo-3"/>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;