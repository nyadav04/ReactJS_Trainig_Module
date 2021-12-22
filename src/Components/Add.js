import React,{useState} from 'react';

import List from './List';
const Add=()=> {
    const [task,setTask]=useState("")
    let error={}
    const [errors,setError]=useState({})
    const [data,setData]=useState([])

const customValidations=()=>{
    if(task.length===0){
        error.task="Task feild cannot be empty"
    }
}

const submit=(e)=>{
    e.preventDefault()
    customValidations()
    if(Object.keys(error).length!==0){
        setError(error)
    }else{
        setData([...data,task])
        setTask("")
        setError({})
    }  
}
  return (
    <div class="container mt-5 col-md-4">
    <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder="Tasks" class="form-control"/>
    {errors&&<span>{errors.task}</span>}<br/>
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
    <button  class="btn btn-primary col-md-4" onClick={submit}>Submit</button>
    </div>
    <List data={data} setData={setData}/>
    </div>
  );
}
export default Add