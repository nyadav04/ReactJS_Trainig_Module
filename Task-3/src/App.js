import React from "react";
import DerivedStateFromProps from "./DerivedStateFromProps";
import SnapshotBeforeUpdate from "./SnapshotBeforeUpdate";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <DerivedStateFromProps name="Radhika"/>
      // <SnapshotBeforeUpdate />
    );
  }
}

export default App;
