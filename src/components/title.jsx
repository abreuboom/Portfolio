import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <p className="secondary-text">Hi, my name is</p>
        <br />
        <h1 className="underline-title">{this.props.name}</h1>
      </div>
    );
  }
}

export default Title;
