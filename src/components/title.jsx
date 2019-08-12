import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    var titleClass = (function(mode) {
      switch (mode) {
        case 0:
          return "enlarged";
        default:
          return "minimized";
      }
    })(this.state.activeMode);

    return (
      <div className={titleClass}>
        <p className="secondary-text">Hi, my name is</p>
        <br />
        <h1 className="underline-title">{this.props.name}</h1>
      </div>
    );
  }
}

export default Title;
