
import './App.css';

import React, { Component } from 'react'
import Home from './Home';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data:0
    }
  }
  incrementHandler=()=>{
this.setState({data:this.state.data+1})
  }
  
  render() {
    return (
      <div>
        <h1>getDerived state from prop</h1>
        <Home data={this.state.data}/>
        <button onClick={this.incrementHandler}> Increment ++  {this.state.data}</button>
      </div>
    )
  }
}
