import React from "react";
import { Component } from "react";
import About from "./js/components/About";
import Footer from "./js/components/Footer";
import Intro from "./js/components/Intro";
import Navi from "./js/components/Navi";
import Projects from "./js/components/Projects";
import "./App.css";
import "./index.css";
import Skills from "./js/components/Skills";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navi />
        <Intro />
        <div className="content" id="home">
          <div id="home-main">
            <About />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
