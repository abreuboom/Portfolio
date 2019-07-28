import React, { Component } from "react";

import PreviewCard from "./previewCard";

class Projects extends Component {
  render() {
    console.log(this.props.projects);
    return (
      <div className="project-section">
        <p>Recent Projects</p>
        <br />
        <div className="projects">
          {this.props.projects.map(project => {
            return <PreviewCard {...project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
