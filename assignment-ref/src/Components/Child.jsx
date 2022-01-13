import React from 'react'
import HOC from "./HigherOrderComp";
 const Child=React.forwardRef((props,ref)=>{
    
        return (
            <div>
                <h3>Text In Child</h3>
                <h1 ref={ref}>Deepanshu</h1>
                <button onClick={()=>ref.current.style.color='black'}>Change to default</button>
            </div>
        )
    
})

export default HOC(Child);