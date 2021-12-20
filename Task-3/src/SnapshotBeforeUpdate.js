import React, { Component } from "react";

export default class SnapshotBeforeUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "Vanilla JS",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "ReactJS" });
    }, 2000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("prev").innerHTML =
      "Previous value " + prevState.name;
  }

  componentDidUpdate() {
    document.getElementById("new").innerHTML = "New value " + this.state.name;
  }

  render() {
    return (
      <div id="container">
        <div id="prev"></div>
        <div id="new"></div>
      </div>
    );
  }
}
