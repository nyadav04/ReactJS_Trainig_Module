import React from 'react';
class SnapshotExample extends React.Component {
  // Initializing the state
  state = {
    name: 'BMW',
  };

  componentDidMount() {
    // Changing the state after 3 sec
    setTimeout(() => {
      this.setState({ name: 'Bayerische Motoren Werke' });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Displaying the previous value of the state
    document.getElementById(
      'prev'
    ).innerHTML = `Previous/ Short Name: <strong>${prevState.name}</strong>`;
  }

  componentDidUpdate() {
    // Displaying the current value of the state
    document.getElementById(
      'new'
    ).innerHTML = `Current/ Full Name: <strong>${this.state.name}</strong>`;
  }

  render() {
    return (
      <div>
        <div id='prev'></div>
        <div id='new'></div>
      </div>
    );
  }
}

export default SnapshotExample;
