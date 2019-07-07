import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import Title from "./components/title";
import Bio from "./components/bio";
import Projects from "./components/projects";
import * as serviceWorker from "./serviceWorker";
import "circular-std";
import { GetProjects } from "./projectDirectory.js";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const root = document.getElementById("root");

function App() {
  console.log(GetProjects());
  return (
    <React.Fragment>
      <div className="title-section">
        <Title name="John Abreu" />
        <Bio />
      </div>

      <Projects projects={GetProjects()} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, root);
