import React,{useContext,useState,useEffect} from 'react'
import {HomeContext} from "../Context/Home";
export default function Edit() {
    const {EditHandler,itemToEdit,} = useContext(HomeContext);
    
    const [data,setData]=useState(itemToEdit);
    
    const HandleEdit=()=>{
        console.log("pressed")
        EditHandler(data)
    }
    return (
        <div className="add-container">
            <input type="text" className="input-text" value={data.value} onChange={(e)=>setData({...data,value:e.target.value})}/>
            <button className='add-btn' onClick={HandleEdit}>Edit</button>
        </div>
    )
}
