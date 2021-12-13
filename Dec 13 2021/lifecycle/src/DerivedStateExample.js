import React from 'react';

class DerivedStateExample extends React.Component {
  render() {
    return (
      <div>
        <Child name='Audi'></Child>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Volkswagen',
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name) {
      //Change in props
      return {
        name: props.name,
      };
    }
    return null;
  }

  render() {
    return <div> My name is {this.state.name}</div>;
  }
}

export default DerivedStateExample;
