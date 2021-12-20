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

//ESLint Plugin
//Install: npm install eslint-plugin-react-hooks --save-dev
//Explanation - ESLint : Use multiple State or Effect hooks in a sigle component
// function Form() {
//   //state variable
//   const [name, setName] = useState('Nishank');

//   //persisting the form using effect
//   if (name !== ''){
//     useEffect(function persistForm() {
//       localStorage.setItem('formData', name);
//     });
//   }

//   //Used another state variable
//   const [lastName, setLastname] = useState('Rao');

//   //Use effect for updating title
//   useEffect(function updateTitle () {
//     document.title = name + '' + lastName;
//   });

//   //...
// }

//First render
//initializing state variable
useState('Nishank')
//adding an effect for persisting the form
useEffect(persistForm)
useState('Rao')
useEffect(updateTitle)

//Second render
//initializing state variable
useState('Nishank')
//adding an effect for persisting the form
useEffect(persistForm)
useState('Rao')
useEffect(updateTitle)

///If there's a rule break - effect call inside a condition

useState('Nishank') // Read state variables (argument is ignored)
//useEffect(persistForm) - This hook was skipped
useState('Rao') //Failed to read the lastName state variable
useEffect(updateTitle) //Failed to replace the effect

function Form() {
  //state variable
  const [name, setName] = useState('Nishank');

  //persisting the form using effect
  
  useEffect(function persistForm() {
    if (name !== ''){
      localStorage.setItem('formData', name);
    }
  });
  

  //Used another state variable
  const [lastName, setLastname] = useState('Rao');

  //Use effect for updating title
  useEffect(function updateTitle () {
    document.title = name + '' + lastName;
  });

  //...
}


// function FriendListItem(props) {
//   const [isOnline, setIsOnline] = useState(null);

// useEffect(()=>{
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline)
//   }

//     ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//     return()=>{
//       ChatApi.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//     }
//   })
//   return (
//     <li style={{color: isOnline ? 'green' : 'grey'}}>
//       {props.friend.name}
//     </li>
//   )
// }

function useFriendStatus(friendID) {
  const [isOnline, setOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setOnline(status.isOnline)
    }
    ChatApi.subscribeToFriendStatus(friendID, handleStatusChange);
    return()=>{
            ChatApi.unsubscribeFromFriendStatus(friendID, handleStatusChange)
          }
  })
  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading'
      }
      return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)
  return (
        <li style={{color: isOnline ? 'green' : 'grey'}}>
          {props.friend.name}
        </li>
      )
}
