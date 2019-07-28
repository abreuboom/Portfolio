import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <h1 className="menu-title">Menu</h1>
        <ul className="menu-options">
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>Projects</li>
          <li>Connect</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
