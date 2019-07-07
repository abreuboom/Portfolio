import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div className="bio-section">
        <p>
          I’m a <span className="clickable-text">Software Engineer</span> that’s
          passionate about{" "}
          <span className="clickable-text">Portrait Photography</span> and{" "}
          <span className="clickable-text">Product Design</span>
        </p>
      </div>
    );
  }
}

export default Bio;
