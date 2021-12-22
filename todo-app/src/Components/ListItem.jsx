import React,{useContext} from 'react'
import {FaTrash} from "react-icons/fa";
import {MdEdit} from "react-icons/md"
import {HomeContext} from "../Context/Home";
export default function ListItem({id,value}) {
    const {DeleteHandler,EditEnable} = useContext(HomeContext);
    return (
        <div className="listItem-container">
            <h1 className="list-item">{value}</h1>
           <div className="list-button">
           <div><FaTrash className="trash" onClick={()=>DeleteHandler(id)}/></div>
            <div><MdEdit className="edit" onClick={()=>{EditEnable(id)}}/></div>
           </div>
        </div>
    )
}
