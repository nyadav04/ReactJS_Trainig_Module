import React, { useEffect, useState } from "react";
import axios from "axios";

function Practice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

 async function GetData() {
    const res=await axios.get("https://randomuser.me/api/?results=50")
    setUsers(res.data);
  }

  console.log(users);

  return (
    <div>
      <h1>Users Data</h1>
      <ol>
        {users &&
          users.results &&
          users.results.map((user, index) => {
            let fullName = user.name.first + " " + user.name.last;
            return (
              <li key={index}>
                {user.gender} {fullName}
              </li>
            );
          })}
      </ol>
    </div>
  );
}

export default Practice;
