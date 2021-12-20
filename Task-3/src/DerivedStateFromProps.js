import React, { Component } from 'react'

export default class DerivedStateFromProps extends Component {
    constructor(){
        super();
        this.state={
            name:"Radhika Makkar"
        }
    }
    static getDerivedStateFromProps(props,state){
        if(props.name!==state.name){
            return{
                name:props.name
            }
        }
        return null;
    }
    
    render() {
        return (
            <div>
                <h1>Welcome,{this.state.name}</h1>
            </div>
        )
    }
}
