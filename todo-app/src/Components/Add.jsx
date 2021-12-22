import React,{useContext,useState} from 'react'
import {HomeContext} from "../Context/Home";
export default function Add() {
    const {AddHandler} = useContext(HomeContext);
    const [data,setData]=useState("");
    const HandleAdd=(e)=>{
e.preventDefault();
AddHandler(data);
setData("");
    }
    return (
        <div >
            <form className="add-container">
            <input type="text" className="input-text" value={data} onChange={(e)=>setData(e.target.value)}/>
            <button type="submit" className='add-btn' onClick={(e)=>HandleAdd(e)}>Add</button>
            </form>
            
        </div>
    )
}
