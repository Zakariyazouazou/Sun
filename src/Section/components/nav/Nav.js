import React, { Component } from "react";
import "./nav.css";
import logo from "./../../../assets/Symbol/Symbol1 (1).png";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <Link to='/'><img src={logo}/></Link> 
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>  
      </div>
    );
  }
}
