import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  state = {
    value: "world"
  };

  render() {
    const { value } = this.state;
    return <div className="App">Hello, {value}</div>;
  }
}

export default hot(module)(App);
