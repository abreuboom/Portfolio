import React, { Component } from "react";

class PreviewCard extends Component {
  state = {
    expanded: false
  };

  handleClick = () => {
    console.log("yerr " + this.props.name);
  };

  render() {
    return (
      <div
        className="preview-card"
        onClick={this.handleClick}
        style={this.props.css}
      >
        <a href={this.props.link} target="_blank">
          <div class="text">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>

          <img src={this.props.thumbnail} alt={this.props.name} />
        </a>
      </div>
    );
  }
}

export default PreviewCard;
