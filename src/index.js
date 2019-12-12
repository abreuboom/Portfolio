import "./css/styles.css";
import "circular-std";

import * as serviceWorker from "./serviceWorker";

import React, {
  Component
} from "react";

import About from "./components/about";
import Bio from "./components/bio";
import {
  GetProjects
} from "./projectDirectory.js";
import Menu from "./components/menu";
import Projects from "./components/projects";
import ReactDOM from "react-dom";
import Social from "./components/social";
import Title from "./components/title";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const root = document.getElementById("root");

class Home extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      activeMode: 0
    };
  }

  select(mode) {
    this.setState({
      activeMode: mode
    });
  }

  render() {
    var content = (function (mode) {
      // switch (mode) {
      //   case 0:
      //     return <Projects projects={GetProjects()} />;
      //   case 1:
      //     return <About />;
      //   case 2:
      //     return <Projects projects={GetProjects()} />;
      //   default:
      //     return <div />;
      // }
    })(this.state.activeMode);

    return ( <
      React.Fragment > {
        /* <Menu setMode={this.select} /> */ } {
        /* <Social /> */ } <
      div className = "title-section" >
      <
      Title name = "John Abreu." / >
      <
      Bio / >
      <
      /div> {
        /* {content} */ } <
      Projects projects = {
        GetProjects()
      }
      /> <
      /React.Fragment>
    );
  }
}

ReactDOM.render( < Home / > , root);