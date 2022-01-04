import React from 'react'

export default function Hoc(OriginalComponent) {
  
   
    class NewComponent extends React.Component{
constructor(props){
super(props);
this.state={
    searchTerm: ""
}

}
handleSearch=(e)=>{
this.setState({searchTerm:e.target.value});
}
        render(){
            return <div className="hoc-container">

            <input value={this.state.searchTerm}
            onChange={e=>this.handleSearch(e)} type="text" placeholder='search'/> 
            <OriginalComponent searchTerm={this.state.searchTerm}/>        
            </div>
        }
    }

    return NewComponent;

}
