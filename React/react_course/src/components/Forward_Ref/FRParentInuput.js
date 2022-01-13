import React, {Component} from 'react'

class FRParentInput extends Component {
    constructor(props) {
      super(props);
      
      this.inputRef = React.createRef();
    }
  
    clickHandler = () => {
      this.inputRef.current.focus();
    };
  
    render() {
      return (
        <div>
          <h1>Forward Ref Parent Input</h1>
          <p>Attach the ref to the child component using ref attribute</p>
          <FRInput ref={this.inputRef} />
          <button className="btn btn-warning" onClick={this.clickHandler}>Foucs Input</button>
        </div>
      );
    }
  }
  
  // class FRInput extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>Forward Ref</h1>
  //         <input type="text" />
  //       </div>
  //     );
  //   }
  // }
  
  const FRInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <h1>Forward Ref</h1>
        {/* <input type="text" ref={ref} /> */}
        <div class="input-group mb-3">  
            <input type="text" className="form-control" placeholder="Enter your text" aria-label="Username" aria-describedby="basic-addon1" ref={ref}/>
        </div>
      </div>
    );
  });
  
export default FRParentInput;
  