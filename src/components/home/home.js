import React, { Component } from "react";
import logo from '../images/thumbs-up.jpg';
import '../images/bgimage.css';
import './home.css';
import Nav from './Nav.js';
import { useHistory, withRouter,Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (<div>
            <Nav/>
            <div className="auth-wrapper">
    
            <h1 style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></h1>
            </div>
            </div>
        );
    }
}