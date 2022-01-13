import React, { Component } from 'react'

export default class RefComp extends Component {
    constructor(props){
super(props);

this.textRef=null;
this.setTextRef=(e)=>{
this.textRef=e;
this.focusonClick.bind(this);
}
    }

   focusonClick=()=>{
if(this.textRef){
    
    this.textRef.focus();
};
    }
componentDidMount(){
    this.focusonClick();
}

    render() {
        return (
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" ref={e=>this.setTextRef(e)} placeholder='name' />
                <button onClick={()=>this.focusonClick()}>Focus</button>
            </div>
        )
    }
}
