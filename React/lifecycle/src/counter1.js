//Without using shouldComponentUpdate()
import React, {Component} from "react";

// class Counter1 extends Component {
//     render () {
//         console.log('Counter 1 is calling')
//         return (
//             <div>
//                 <h2>Counter 1</h2>
//                 <h3>{this.props.value}</h3>
//                 <button onClick={this.props.onClick}>Add</button>
//             </div>
//         );
//     }
// }

//With using shouldComponentUpdate()
class Counter1 extends Component {
    shouldComponentUpdate(nextProps) {

        //Randering component only if the passed value is changhed
        if(nextProps.value !== this.props.value) {
            return true;
        } else {
            return false;
        }
    }
    render () {
                console.log('Counter 1 is calling')
                return (
                    <div>
                        <h2>Counter 1</h2>
                        <h3>{this.props.value}</h3>
                        <button onClick={this.props.onClick}>Add</button>
                    </div>
                );
            }
}

export default Counter1;