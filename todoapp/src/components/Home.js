import React, { useState } from "react";
import { Table,Form,Button } from "react-bootstrap";

function Home() {
  const [list, setList] = useState([
    { id: "1", task: "Car service", status: "Todo" },
    { id: "2", task: "Go to bank", status: "Todo" },
  ]);

  const [task,setTask]=useState("");

  const completeTask = (id) => {
    const newTasks = [...list];
    let filteredTasks = newTasks.filter((el) => el.id === id);
    filteredTasks.map((el) => (el.status = "Completed"));
    setList(newTasks);
  };

  const submitHandler=(e)=>{
      let listLength=list.length+1;
    e.preventDefault();
    setList([...list,{id:listLength.toString(),status:"Todo",task:task}])
    setTask("");
}

  const removeCompleted=()=>{
      let newList=list.filter(task=>task.status!=="Completed");
      console.log(newList)
      setList([...newList])
  }

  return (
    <div>
      <h1>To Do List</h1>
      <>
      {list.length>0?(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((el,index) => (
            <tr key={index}>
              <td>{el.id}</td>
              <td>{el.task}</td>
              <td>{el.status}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => completeTask(el.id)}
                >
                  Change status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
          ):
          <h4>No Tasks Added</h4>}
          </>
      <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h5>Add New Task</h5></Form.Label>
    <Form.Control type="text" value={task} onChange={e=>setTask(e.target.value)} 
    placeholder="Enter task" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<Button variant="success" type="submit" className="mt-2" onClick={removeCompleted}>
    Remove All Completed Tasks
  </Button>
    </div>
  );
}

export default Home;
