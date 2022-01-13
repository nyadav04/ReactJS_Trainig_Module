import React, { Component } from 'react'
import Child from "./Child";
export default class Parent extends Component {
    constructor(props){
super(props);
this.buttonRef=React.createRef();
    }
  
    changeColor=()=>{
this.buttonRef.current.style.color='red';
    }
    render() {
        return (
            <div>
                       <h3>Button in parent</h3>
                <button onClick={()=>this.changeColor()}>Change Color Of Child Text</button>
                
                <Child ref={this.buttonRef} />
               
            </div>
        )
    }
}
