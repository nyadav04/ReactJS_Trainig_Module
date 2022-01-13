///Cretaing fres / callback Ref example
const { func } = require("prop-types");
const { useRef } = require("react");
const { render } = require("react-dom");

Class MyComponent extends React.Coponent {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render () {
        return <div ref={this.myRef}/>;
    }
}


//When adding Ref to a DOM Element
//Example1 
//Below example uses a ref to store a reference to DOM node:
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        //ref is created over a DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        //We are accessing the "current" to get the DOM node
        this.textInput.current.focus();
    }
    render() {
        return (
            <div>
                <input
                type="text"
                ref={this.textInput}/>
                <input
                type="button"
                value="Focus the text inputted"
                onClick={this.focusTextInput}/>
            </div>

        )
    }
}

//Example2: Adding Ref to a class Component
//If we want to wrap the Custom TextInput explained in the above example it being clicked immidiately after mounting, we could use a 
//ref to get access to the custom input and call its focusTextInput method manually.

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render () {
        return (
            <CustomTextInput ref={this.textInput}/>
        );
    }
}

//Example3: Refs and Function components
function MyFunctionCompoent() {
    return <input/>;
}

class Parent extends React.Component {
    constructor(props) {
        super (props);
        this.textInput = React.createRef();
    }
    render() {
        ///this wont work
        return(
            <MyFunctionCompoent ref={this.textInput} />
        );
    }
}

//inside a function
function CustomTextInput(props) {
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }
    return (
        <div>
            <input
                type="text"
                ref={textInput}/>
                <input
                type="button"
                value="Focus the text inputted"
                onClick={handleClick}/>
        </div>
    )
}

//The example below implements a common pattern: using the ref callback to store a reference to a DOM node in an instance property.

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

//You can pass callback refs between components like you can with object refs that were created with React.createRef().

function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
  }
  
  class Parent extends React.Component {
    render() {
      return (
        <CustomTextInput
          inputRef={el => this.inputElement = el}
        />
      );
    }
  }
  

//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
//The returned object will persist for the full lifetime of the component.

//A common use case is to access a child imperatively:

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

//Forwarding ref in DOM
function FancyButton(props) {
    return (
      <button className="FancyButton">
        {props.children}
      </button>
    );
  }
  
  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));

  //Forwarding ref in High Order component
  function logProps(WrappedComponent) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  
    return LogProps;
  }

  import FancyButton from './FancyButton';

const ref = React.createRef();

// The FancyButton component we imported is the LogProps HOC.
// Even though the rendered output will be the same,
// Our ref will point to LogProps instead of the inner FancyButton component!
// This means we can't call e.g. ref.current.focus()
<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}
/>;


function logProps(Component) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
  
      render() {
        const {forwardedRef, ...rest} = this.props;
  
        // Assign the custom prop "forwardedRef" as a ref
        return <Component ref={forwardedRef} {...rest} />;
      }
    }
  
    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    });
  }