import React, {useState, useEffect} from "react";

// class Example extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state =}
//     count:0
//   };
// }

// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline)
//   }

//   useEffect(()=>{
//     ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//     return()=>{
//       ChatApi.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//     }
//   })
//   if(isOnline === null) {
//     return 'Loading'
//   }
//   return isOnline ? 'Online' : 'Offline'
// }

function Example() {
  const [count, setCount] = useState(0);
  // const [age, setAge] = useState(34);
  // const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `Clicked ${count} times`
  });

  return(
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
//<button onClick={() =>this.setState({count: this.state.count + 1})}>Click</button>
export default Example;