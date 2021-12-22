import React,{useState,useContext} from 'react'
import Add from "../Components/Add";
import Edit from "../Components/Edit";
import DisplayList from "../Components/DisplayList";
import {HomeContext} from "../Context/Home";
export default function Home() {

const {isEdit,DeleteAllHandler,items} =useContext(HomeContext)
let AddOrEdit=isEdit?<Edit/>:<Add/>
    return (
        <div className="home-contianer">
            {AddOrEdit}
            <DisplayList/>
            <button type="button" style={{display:items.length==0?"none":"inline"}} onClick={()=>DeleteAllHandler()} className="clearAll">Delete</button>
        </div>
    )
}
