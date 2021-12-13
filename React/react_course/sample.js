
class abc extends React.Component {
    render() {
        return <h1> Hello, {this.props.name}</h1>
    }
}

constructor(props) {
    super(props);

    this.state = {counter:0};
    this.handler = this.handleClick.bind(this)
}

componentDidUpdate(prevProps, prevState, snapshot)

componentDidUpdate(prevProps) {

    if(this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID)
    }
}
    