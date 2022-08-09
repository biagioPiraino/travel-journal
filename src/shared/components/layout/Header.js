import React, { Component } from "react";
import "./Header.css"
import logo from "../../images/logo.svg"

class Header extends Component {
   render() {
      return (
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h4>my travel journal.</h4>
         </header>
      );
   }
}

export default Header;