import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
import '../styles/header.css'

import logo from '../assets/megan-logo.svg'
class Header extends Component {
  state = { 
    isDrawerOpen:false
  }
  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  }
  render() { 
    let drawerStatus
      if(this.state.isDrawerOpen){
        drawerStatus = "DrawerOpen"
      }
    return ( 
    <header className={drawerStatus}>
      <div id="headerLinks">
        <div id="headerLeft">
        <NavLink onClick={this.toggleDrawer} className="navLink" exact activeClassName="selected" to="/">HOME</NavLink>
        <NavLink onClick={this.toggleDrawer} className="navLink" activeClassName="selected" to="gallery">GALLERY</NavLink>
        </div>

        <img id="logo" src={logo}/>

        <div id="headerRight">
        <NavLink onClick={this.toggleDrawer} className="navLink" activeClassName="selected" to="about">ABOUT ME</NavLink>
        <NavLink onClick={this.toggleDrawer} className="navLink" activeClassName="selected" to="contact">CONTACT</NavLink>
        </div>
        <div onClick={this.toggleDrawer} className={"btn " + drawerStatus} id="chevron"/>
      </div>
    </header>
    );
  }
}

export default Header;
