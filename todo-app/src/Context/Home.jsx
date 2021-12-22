import React, { createContext, useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
const localData=localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[]
export const HomeContext = createContext()
export default function HomeProvider ({ children }) {
  const [items, setItems] = useState(localData)
  const [itemToEdit, setItemToEdit] = useState(null)
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(items))
  }, [items]);
  const AddHandler = item => {
    
    const ifThere = items.find(i => item === i.value)
    if (ifThere == undefined) {
      if(item=="")
      {
        alert("Plz enter any value")
      }
      else{
        setItems([...items, { id: uuidv4(), value: item }])

      }
    } else {
      alert(`"${item}" already there`)
    }
  }
  const DeleteHandler = id => {
    console.log(id)
    const data = items.find(i => i.id == id)
    const confirmation = window.confirm(
      `Do You Want To Delete "${data.value}"?`
    )
    if (confirmation) {
      const filteredData = items.filter(i => i.id !== id)
      console.log(filteredData)
      setItems(filteredData)
    }
  }

  const EditEnable = id => {
    setIsEdit(true)
    const item = items.find(i => i.id === id)
    console.log(item)
    setItemToEdit(item)
  }

  const EditHandler = (d) => {
      console.log("d",d)
    const checkItem=items.find(i=>i.id==d.id);
    console.log(checkItem)
    if(checkItem!=undefined){
        const newItems=items.map(m=>{
            if(m.id==d.id){
                return {...m,value:d.value}
            }
            else{
                return m
            }
        })
        console.log(newItems)
        setItems(newItems)
        setIsEdit(false)
    }
  }
  const DeleteAllHandler=()=>{
setItems([]);
  }
  return (
    <HomeContext.Provider
      value={{
        items,
        itemToEdit,
        isEdit,
        AddHandler,
        DeleteHandler,
        EditEnable,EditHandler,DeleteAllHandler
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
