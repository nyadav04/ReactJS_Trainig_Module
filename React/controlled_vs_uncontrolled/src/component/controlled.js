import react, { Component } from "react";

class Controlledcomponent extends Component {
    state = {
        message: ''
    }
    updateMessage = (newText) => {
        console.log(newText)
        this.setState(() => ({
            message: newText    
        }))
    }

    render() {
        return (
            <div className="App">
                <input type="text"
                    placeholder="type your message"
                    value={this.state.message}
                    onChange={(event) => this.updateMessage(event.target.value)}
                />
                <p>Your message is: {this.state.message}</p>
            </div>
        );
    }
}

export default Controlledcomponent;