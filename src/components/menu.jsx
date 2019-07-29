import React, { Component } from "react";

var NavState = {
  HOME: 0,
  ABOUT: 1,
  PROJECTS: 2,
  CONNECT: 3
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      activeIndex: 0
    };
  }

  select = index => this.setState({ activeIndex: index });

  resetMenu = () => this.setState({ activeIndex: 0 });

  render() {
    return (
      <div className="menu">
        <h1 className="menu-title" onClick={this.resetMenu}>
          Menu
        </h1>
        <ul className="menu-options">
          <MenuItem
            name="About"
            index={1}
            isActive={this.state.activeIndex == 1}
            onClick={this.select}
          />
          <MenuItem
            name="Projects"
            index={2}
            isActive={this.state.activeIndex == 2}
            onClick={this.select}
          />
          <MenuItem
            name="Connect"
            index={3}
            isActive={this.state.activeIndex == 3}
            onClick={this.select}
          />
        </ul>
      </div>
    );
  }
}

class MenuItem extends React.Component {
  handleClick = () => this.props.onClick(this.props.index);
  render() {
    return (
      <React.Fragment>
        <li>
          <a
            onClick={this.handleClick}
            className={this.props.isActive ? "active" : "inactive"}
          >
            <span>{this.props.name}</span>
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export default Menu;
