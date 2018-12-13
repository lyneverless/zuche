import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form style={this.props.style}>
                <button type="submit">立即选车</button>
            </form>
        )
    }
}


export default Form;