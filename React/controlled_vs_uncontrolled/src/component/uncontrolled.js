import React, {Component} from "react";

class Uncontrolledcomponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
    }

    handleChange = (newText) => {
        console.log(newText);
    }

    render() {
        return (
            <div className="App2">
                <div className="container">
                    <input type="text"
                    placeholder="write your message"
                    ref={this.input}
                    onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}

export default Uncontrolledcomponent;