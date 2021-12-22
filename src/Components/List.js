import React from 'react';

const List = (props) => {
    const {data,setData}=props
    const remove=(e)=>{
        const filtered=data.filter((tasks,i)=>{
            return(e!==i+1)
        })
        setData(filtered)
    }
    return (
        <div>
          {data.length!==0 &&
          <div>
          <h1>Tasks</h1>
          <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tasks</th>
                <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data.map((task,i)=>{
                    return(
                        <tr>
                        <th scope="row">{i+1}</th>
                        <td>{task}</td>
                        <td>{<input type="checkbox"/>}</td>
                        <td><input type="button" value="Remove" class="btn btn-sm btn-danger" onClick={()=>{remove(i+1)}}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>}
        </div>
    );
};

export default List;