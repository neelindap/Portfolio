import React, { Component } from 'react';
import logo from '../../static/images/NI_Logo.png';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-default affix-top" data-spy="affix" data-offset-top="70">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt="Neel Indap" />
                </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
	    </nav>
    );
  }
}

export default Navigation;