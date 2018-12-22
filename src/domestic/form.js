import React, {Component} from 'react';
import {connect} from 'react-redux';
import InForm from './inForm';
import './form.css';


class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form">
                <InForm fuck={this.props.from}/>
                <InForm fuck={this.props.to}/>
                <button type="submit">立即选车</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        from: state.domesticReducer.choose.from,
        to: state.domesticReducer.choose.to
    }
};


export default connect(mapStateToProps)(Form);