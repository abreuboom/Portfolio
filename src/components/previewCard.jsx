import React, { Component } from "react";

class PreviewCard extends Component {
  render() {
    return (
      <div className="preview-card" href={this.props.link} target="_blank">
        <img src={this.props.thumbnail} alt="" />
        <div className="project-details">
          <h3>{this.props.name}</h3>
          <br />
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
