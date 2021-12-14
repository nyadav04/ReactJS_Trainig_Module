import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
currentValue:0
        }
    }
    static getDerivedStateFromProps(prop,state){

        console.log(prop,state);
        if(prop.data%5===0){
            return {
                currentValue:prop.data*10
            }
        }
        else{
            return {
                currentValue:prop.data
            }
        }
      
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
console.log("get Snapshot before Update");

return this.props.data*30
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log("Component Did Update");
        console.log(snapshot)
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <h2>Current Value {this.state.currentValue}</h2>
            </div>
        )
    }
}
