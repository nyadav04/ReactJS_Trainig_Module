import React,{useContext} from 'react'
import {HomeContext} from "../Context/Home";
import ListItem from "./ListItem";
export default function DisplayList() {
    const {items}=useContext(HomeContext);

    return (
        <div className="display-container">
            {items.map((item)=>{
                return <ListItem key={item.id} {...item}/>
            })}
        </div>
    )
}
