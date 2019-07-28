import "./css/styles.css";
import "circular-std";

import * as serviceWorker from "./serviceWorker";

import Bio from "./components/bio";
import { GetProjects } from "./projectDirectory.js";
import Menu from "./components/menu";
import Projects from "./components/projects";
import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/title";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const root = document.getElementById("root");

function Home() {
  console.log(GetProjects());
  return (
    <React.Fragment>
      <Menu />
      <div className="title-section">
        <Title name="Puppies" />
        <Bio />
      </div>

      <Projects projects={GetProjects()} />
    </React.Fragment>
  );
}

ReactDOM.render(<Home />, root);
