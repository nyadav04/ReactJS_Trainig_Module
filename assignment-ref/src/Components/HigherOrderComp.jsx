

import React from 'react'

export default function HigherOrderComp(OriginalComponent) {
   class UpdatedComp extends React.Component{
constructor(props){
    super(props);
  
}
    render(){
console.log(this.props)
        return(
            <div>
                <h3>In HOC</h3>
 <OriginalComponent ref={this.props.myRef}/>
            </div>
        
        );
    }
   }
   return React.forwardRef((props,ref)=><UpdatedComp myRef={ref} {...props}/>) ;
}
