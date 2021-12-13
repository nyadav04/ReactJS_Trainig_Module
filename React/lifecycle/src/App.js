import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import reactDom from 'react-dom';
import Counter1 from "./counter1";
import Counter2 from "./counter2";

//getSnapshotBeforeUpdate()
//This mthod is invoked just before the DOM is being rendered.
// Any value returned by this method will be used as a paramweter for componentDidUpdate() method.
//Syntax: getSnapshotBeforeUpdate(prevProps, prevState)
class App extends React.Component {
  //Initialize the state
  state = {
    name: 'TPG',
  };

  componentDidMount() {

    //Changing the sate after 2 sec
    setTimeout(() => {
      this.setState({name: 'Three Pillars Group'})
    }, 2000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    //Previous value of the state
    document.getElementById('prev').innerHTML = 'Previous Name ' + prevState.name;
  }

  componentDidUpdate() {

    //Current value of the state
    document.getElementById('new').innerHTML = 'Current Name ' + this.state.name;
  }

  render() {
    return (
      <div>
        <div id='prev'></div>
        <div id='new'></div>
      </div>
    );
  }

}


// static getDerivedStateFromProps()
//1. this method is used when the state of a component depends on change of props
// 2. getDerivedStateFromProps(props, state), it's a static method, which is called just before the render()
// method in both mounting and updating phases in React

// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <Child name = "Tarun"></Child>
//       </div>
//     )
//   }
// }

// class Child extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Aman"
//     }
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (props.name !== state.name){
//       //change in props
//       return{
//         name: props.name
//       };
//     }
//     return null; //No change to state
//   }
//   render(){
//     return(
//       <div>My name is {this.state.name}</div>
//     )
//   }
// }



//shouldComponentUpdate()
//syntax: shouldComponentUpdate(nextProps, nextState)
//Return true and if it returns false, then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked
// const App = () => {

//   //Using the useState hook for defining the state
//   const [counter1, setCounter1] = useState(0);

//   const increament1 = () => {
//     setCounter1(counter1 + 1);
//   };
//   const [counter2, setCounter2] = useState(0);

//   const increament2 = () =>{
//     setCounter2(counter2 + 1);
//   };

//   return (
//     <div className="container">
//       <div>
//         <Counter1 value={counter1} onClick={increament1} />
//       </div>
//       <div>
//         <Counter2 value={counter2} onClick={increament2} />
//       </div>
//     </div>
//   )
// }

//componentWillUnmount()
// class ComponentOne extends React.Component {
//   // Define the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted')
//   }
//   render() {
//     return <h1>Morning Guys!</h1>
//   }
// }

// class App extends React.Component {
//   state = {display: true};
//   delete = () =>{
//     this.setState({display: false});
//   };
//   render() {
//     let comp;
//     if(this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>
//           Deleting the Component
//         </button>
//       </div>
//     );
//   }
// }

//componentDidUpdate()
//1. It allows us to execute the code when the component is updated.
//2. componentDiUpdate is called after componentDidMount
//Syntax: componentDiUpdate(prevProps, prevState, snapshot)
//prevProps - It is passed to the component
//prevState - Previous state of the component
//snapshot - Value which is returned by get getSnapshotBeforUpdate() method
// class App extends React.Component {
//   //Define the state
//   state = {
//     organisation: 'Three Pillars'
//   };
//   componentDidMount() {
//     //Changing the sate after 1 sec
//     setTimeout(() => {
//       this.setState({organisation: 'Three Pillars Group'});
//     }, 1000)
//   }

//   componentDidUpdate() {
//     document.getElementById('disclaimer').innerHTML = 'Three Pillars is also known as ' + this.state.organisation;
//   }

//   render() {
//     return (
//       <div>
//         <h1 style={{
//           margin: 'auto',
//           width: '50%',
//           padding: 20,
//           marginTop: '10%',
//           border: 'solid 1px black',
//           textAlign: 'center',
//           fontSize: 18
//         }}>
//           Greatest opportunity in Three Pillars for people working in React : {this.state.organisation}
//           <div id="disclaimer"></div>
//         </h1>
//       </div>
//     )
//   }

// }


//component did mount example
// class App extends React.Component {
//   constructor (props) {
//     super(props);

//     //Initializing the state
//     this.state = {color: 'lightgreen'}
//   }
//   componentDidMount() {
//     //Changing the sate after 3 seconds when the component is rendered
//     setTimeout(() => {
//       this.setState({color: 'Brown'});
//     }, 3000)
//   }
//   render() {
//     return (
//       <div>
//         <p style={{
//           color: this.state.color,
//           backgroundColor: 'rgba(0,0,0,0.88)',
//           textAlign: 'center',
//           paddingTop: 20,
//           width: 400,
//           height: 80,
//           margin: 'auto'
//         }}>
//           Practicle of component didmount
//         </p>
//       </div>
//     )
//   }
// }

export default App;
