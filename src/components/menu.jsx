import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      activeIndex: 0
    };
  }

  select(index) {
    this.setState({ activeIndex: index });
    this.props.setMode(index);
  }

  resetMenu = () => this.select({ activeIndex: 0 });

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
            isActive={this.state.activeIndex === 1}
            onClick={this.select}
          />
          <MenuItem
            name="Projects"
            index={2}
            isActive={this.state.activeIndex === 2}
            onClick={this.select}
          />
          <MenuItem
            name="Resume"
            index={3}
            isActive={false}
            onClick={"window.location.href = 'https://w3docs.com';"}
          />
          <MenuItem
            name="Connect"
            index={4}
            isActive={this.state.activeIndex === 4}
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
            href={this.props.link}
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
